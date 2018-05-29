<template>
  <div class="content-container">
    <p>[BTC] (JPY)</p>
    <div class="metrics-container">
      <Metric
        label="test"
        v-bind:result="this.results"
      >
      </Metric>
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

export default {
  name: 'Content',
  data: () => ({
    hello: 'Hello',
    results: ['neko'],
  }),
  components: {
    Metric,
    Chart,
  },
  mounted() {
    fetch('https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=JPY')
      .then((response) => {
        response.json()
          .then((json) => {
            this.results = json[0]['24h_volume_jpy'];
            debugger;
          });
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
