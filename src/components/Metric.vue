<template>
  <div class="metric-container">
    {{ label}}
    {{ result }}
  </div>
</template>

<script>
export default {
  name: 'Metric',
  props: ['result', 'label'],
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
