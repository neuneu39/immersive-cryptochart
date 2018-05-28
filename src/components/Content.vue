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

export default {
  name: 'Content',
  components: {
    Metric,
    Chart,
  },
};
</script>

<style scoped>
  .metrics-container {
    display: flex;
    justify-content: center;
  }
</style>
