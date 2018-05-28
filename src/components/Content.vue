<template>
  <div class="content">
    <h3> [BTC] (JPY) </h3>
    <div class="metric-container">
      <Metric
        label="1 BIT  JPT"
        number="846.12"
      >
      </Metric>
      <Metric
        label="24 Hour Change"
        number="846.12"
      >
      </Metric>
      <Metric
        label="24 Hour High"
        number="846.12"
      >
      </Metric>
      <Metric
        label="24 Hour Low"
        number="846.12"
      >
      </Metric>
      <Metric
        label="24 Hour Volume"
        number="846.12"
      >
      </Metric>
      <Metric
        label="Market Cap"
        number="846.12"
      >
      </Metric>
    </div>
    <Chart />
  </div>
</template>
<script>
import Metric from './Metric';
import Chart from './Chart';

export default {
  name: 'Content',
  components: {
    Metric, Chart,
  },
};
</script>
<style>
  .content {
    margin: auto;
  }
   .metric-container {
    display: flex;
    justify-content: space-around;
    width: 612px;
    height: auto;
    margin: auto;
  }
</style>

