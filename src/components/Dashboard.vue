<template>
  <div class="dashboard">
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default {
  name: 'Dashboard',
  components: {
    Header,
    Content,
    Footer,
  },
};
</script>

<style scoped>
  .dashboard {
    text-align: center;
  }
  .content {
    margin: auto;
  }
  .metric {
    width: 612px;
    height: auto;
    margin: auto;
  }
  .metric1 {
    width: 100px;
    float: left;
    border: 1px solid #000;
    background: #eeeeee
  }
  .metric2 {
    width: 100px;
    float: left;
    border: 1px solid #000;
    background: #eeeeee
  }
  .metric3 {
    width: 100px;
    float: left;
    border: 1px solid #000;
    background: #eeeeee
  }
  .metric4 {
    width: 100px;
    float: left;
    border: 1px solid #000;
    background: #eeeeee
  }
  .metric5 {
    width: 100px;
    float: left;
    border: 1px solid #000;
    background: #eeeeee
  }
  .metric6 {
    width: 100px;
    float: left;
    border: 1px solid #000;
    background: #eeeeee
  }
  .chart {
    border: 1px solid #aaaaaa;
    width: 610px;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: auto;
  }
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height:100pt;
  }
</style>
