<template>
  <div class="content-container">
    <p>[BTC] (JPY)</p>
    <div class="metrics-container">
      <Metric></Metric>
      <Metric></Metric>
      <Metric></Metric>
      <Metric></Metric>
      <Metric></Metric>
      <Metric></Metric>
    </div>
    <Chart></Chart>
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
      values: {},
    };
  },
  mounted() {
    ApiService.getHistoricalData("BTC", "JPY").then(json => {
      console.log('cryptocompare json = ', json);
    });

    fetch('https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=JPY')
      .then(res => res.json())
      .then(json => console.log('cointmarketcap json = ', json));
  },
};
</script>

<style scoped>
  .metrics-container {
    display: flex;
    justify-content: center;
  }
</style>
