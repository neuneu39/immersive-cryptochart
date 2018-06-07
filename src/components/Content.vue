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
    <div v-if="this.viewFlag">
    <Chart
      v-bind:chartData="this.values.closes"
      v-bind:options="{responsive: false, maintainAspectRatio: false}"
      v-bind:width="1200"
      v-bind:height="400"
    ></Chart>
    </div>
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
      viewFlag: false,
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
      this.viewFlag = false;
      Promise.all([
        ApiService.getMarketInformation(this.currency.crypto[0], this.currency.target),
        ApiService.getHistoricalData(this.currency.crypto[0], this.currency.target, this.currency.range),
        ApiService.getHistoricalData(this.currency.crypto[1], this.currency.target, this.currency.range)
      ]).then((json) => {
          this.values.volume = json[0].volume;
          this.values.marketCap = json[0].marketCap;    
          this.values.latest = json[1].latest;
          this.values.change = json[1].change;
          this.values.high = json[1].high;
          this.values.low = json[1].low;   
          
          this.values.closes = {
            labels: json[1].closes.map(d => d.time),
            datasets: [{
              label: this.currency.crypto[0],
              backgroundColor: 'rgba(41, 164, 248, 0.5)',
              data: json[1].closes.map(d => d.close),
            },
            {
              label: this.currency.crypto[1],
              backgroundColor: 'rgba(80, 30, 248, 0.5)',
              data: json[2].closes.map(d => d.close),
            }],
          };
          this.viewFlag = true;
      });
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
