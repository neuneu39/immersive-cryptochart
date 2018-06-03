<template>
  <div class="content-container">
    <p>[BTC][EHT] (JPY)</p>
    <div class="buttons-container">
      <button
        class="aminute"
        v-on:click="changeRange('minute')"
      >
        1 minute
      </button>
       <button
        class="anhour"
        v-on:click="changeRange('hour')"
      >
        1 hour
      </button>
    </div>
    <div class="metrics-container">
      <Metric v-bind:label="`1 ${currency.crypto[0]} <> ${currency.target}`" v-bind:value="values.latest"></Metric>
      <Metric label="24 Hour Change" v-bind:value="values.change"></Metric>
      <Metric label="24 Hour High" v-bind:value="values.high"></Metric>
      <Metric label="24 Hour Low" v-bind:value="values.low"></Metric>
      <Metric label="24 Hour Volume" v-bind:value="values.volume"></Metric>
      <Metric label="24 Market Cap" v-bind:value="values.marketCap"></Metric>
    </div>
    <Chart
      v-bind:chartData="this.values.closes"
      v-bind:options="{responsive: false, maintainAspectRatio: false}"
      v-bind:width="1200"
      v-bind:height="400"
    ></Chart>
  </div>
</template>

<script>
import Metric from './Metric';
import Chart from './Chart';
import ApiService from '../api-service.js';

export default {
  name: 'Content',
  components: {
    Metric,
    Chart,
  },
  data() {
    return {
      errMessage: '',
      currency: {
        //crypto: ['BTC', 'ETH'],
        crypto: ['BTC','ETH'],
        target: 'JPY',
        range: ['hour'],
      },
      values: {
        latest: '0',
        change: '0',
        high: '0',
        low: '0',
        volume: '0',
        marketCap: '0',
        closes: [],
      },
    };
  },
  methods: {
    changeRange: function(timeRange) {
      const newCrypto = this.currency.range.slice(0);
      newCrypto[0] = timeRange;
      this.currency.range = newCrypto;
      this.fillData();
    },
    fillData: function() {
      ApiService.getMarketInformation(this.currency.crypto[0], this.currency.target)
        .then((json) => {
          this.values.volume = json.volume;
          this.values.marketCap = json.marketCap;
        })
        .catch(err => {
          this.errMessage = 'get market information fail';
        })

      ApiService.getHistoricalData(this.currency.crypto[1], this.currency.target, this.currency.range)
        .then((json) => {
          this.values.latest = json.latest;
          this.values.change = json.change;
          this.values.high = json.high;
          this.values.low = json.low;
          // TODO: ここのデータ整形は本当はここにあるべきではない、理由はわかるかな？
          this.values.closes = {
            labels: json.closes.map(d => d.time),
            datasets: [{
              label: this.currency.crypto[0],
              backgroundColor: 'rgba(41, 164, 248, 0.5)',
              data: json.closes.map(d => d.close),
            },
            {// 2ライングラフ表示テスト用
              label: this.currency.crypto[1],
              backgroundColor: 'rgba(80, 80, 248, 0.5)',
              data: json.closes.map(d => d.close * Math.random()),
            }],
          };
        })
        .catch(err => {
          this.errMessage = 'get historical data fail';
        })
      // ApiService.getHistoricalData(this.currency.crypto[1], this.currency.target, this.currency.range)
      // .then((json) => {
      //   this.values.closes.datasets[1] = {
      //     label: this.currency.crypto[1],
      //     backgroundColor: 'rgba(80, 164, 248, 0.5)',
      //     data: json.closes.map(d => d.close),
      //   };
      // })
      // .catch(err => {
      //   this.errMessage = 'get historical data fail';
      // })
    },
  },
  mounted() {
    this.fillData();
  },
};
</script>

<style scoped>
  .metrics-container {
    display: flex;
    justify-content: center;
  }
  button {
  padding: 10px;
  border-radius: 3px;
  border: 0;
  background-color: #52b1d6;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
  transition: background-color .2s ease;
}
button.aminute {
  background-color: rgb(77, 200, 56);
}
button.anhour {
  background-color: rgb(77, 180, 56);
}
</style>
