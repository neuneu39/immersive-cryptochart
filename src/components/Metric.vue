<template>
  <div class="metric">
    <h2> {{ label }}</h2>
    <h2> {{ number }}</h2>
  </div>
</template>
<script>
export default {
  name: 'Metric',
  props: ['label', 'number'],
};
</script>
<style>
  .metric {
    border: 1px solid #000;
    margin-top: 20px;
    padding: 20px;
    background: #f3f1f1
  }
</style>

