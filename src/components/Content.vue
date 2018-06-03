<template>
  <div class="content-container">
    <p>[BTC] (JPY)</p>
    <div class="metrics-container">
      <Metric v-bind:label="`1 ${currency.crypto} <> ${currency.target}`" v-bind:value="values.latest"></Metric>
      <Metric label="24 Hour Change" v-bind:value="values.change"></Metric>
      <Metric label="24 Hour High" v-bind:value="values.high"></Metric>
      <Metric label="24 Hour Low" v-bind:value="values.low"></Metric>
      <Metric label="24 Hour Volume" v-bind:value="values.volume"></Metric>
      <Metric label="24 Market Cap" v-bind:value="values.marketCap"></Metric>
    </div>
    <Chart v-bind:chartData="currentData" v-bind:chartOptions="options"></Chart>
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
      currency: {
        crypto: 'BTC',
        target: 'JPY',
      },
      values: {
        latest: '0',
        change: '0',
        high: '0',
        low: '0',
        volume: '0',
        marketCap: '0',
      },
      currentData: {
        labels: [],
        data: [],
      },
      options:  {responsive: true, maintainAspectRatio: false},
      }
    },

  mounted() {
    ApiService.getMarketInformation(this.currency.crypto, this.currency.target)
      .then((json) => {
        this.values.volume = json.volume;
        this.values.marketCap = json.marketCap;
        console.log("marketinformation");
      });

    ApiService.getHistoricalData(this.currency.crypto, this.currency.target)
      .then((json) => {
        this.values.latest = json.latest;
        this.values.change = json.change;
        this.values.high = json.high;
        this.values.low = json.low;
        // TODO: ここのデータ整形は本当はここにあるべきではない、理由はわかるかな？
        // this.values.closes = {
        //   // labels: json.closes.map(d => d.time),
        //   // datasets: [{
        //   //   label: 'BTC',
        //   //   backgroundColor: 'rgba(41, 164, 248, 0.5)',
        //   //   data: json.closes.map(d => d.close),
        //   // }],
        // };
        this.currentData = {
            labels: json.closes.map(d => d.time),
          datasets: [
            {
              labels: 'BTC',
              backgroundColor: 'rgba(41, 164, 248, 0.5)',
              data: json.closes.map(d => d.close),
            }
          ],
        };  
      })
      .catch(err => {
        this.errMessage ='get historical data fail';
      });      
  },
};
</script>

<style scoped>
  .metrics-container {
    display: flex;
    justify-content: center;
  }
</style>
