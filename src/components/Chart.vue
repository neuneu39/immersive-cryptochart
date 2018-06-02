<!--<template>
  <h1>Chart</h1>
</template> -->

<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  name: 'Chart',
  props: ['chartData','chartOptions'],
  mixins: [reactiveProp],
  extends: Line,
  
  mounted () {
    this.renderChart(this.chartData, this.chartOptions)
  }
};

</script>
<style scoped>

</style>
