<!--<template>-->

<!--</template>-->

<script>
import { Line, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;

export default {
  name: 'Chart',
  extends: Line,
  mixins: [reactiveProp],
  props: ['options', 'chartData'],
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>

<style scoped>
canvas {
  margin: 30px auto;
}
</style>