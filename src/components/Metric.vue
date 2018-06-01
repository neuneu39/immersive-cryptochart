<template>
  <div class="metric-container">
    <div class="metric-label">{{label}}</div>
    <div class="metric-value">{{value}}</div>
  </div>
</template>

<script>
export default {
  name: 'Metric',
  props: ['label', 'value']
};
</script>

<style scoped>
  .metric-container {
    background: #ccc;
    width: 120px;
    height: 50px;
    padding: 10px;
    margin: 10px;
  }
</style>
