<template>
  <div class="dashboard">
<<<<<<< HEAD
    Dashboard
    <div class="header">
      <h1>Cryptocurrency Dashboad</h1>
    </div>
    <div class="content">
      <div class="metric">
        <div class="metric1">
          <h2> 1 BIT  JPT</h2>
          <h2> 846.119</h2>
        </div>
        <div class="metric2">
          <h2> 24 Hour Change</h2>
          <h2> -46.119</h2>
        </div>
        <div class="metric3">
          <h2> 24 Hour Change</h2>
          <h2> -46.119</h2>
        </div>
        <div class="metric4">
          <h2> 24 Hour Change</h2>
          <h2> -46.119</h2>
        </div>
        <div class="metric5">
          <h2> 24 Hour Change</h2>
          <h2> -46.119</h2>
        </div>
        <div class="metric6">
          <h2> 24 Hour Change</h2>
          <h2> -46.119</h2>
        </div>
      </div>
      <div class="chart">
        <h1>chart</h1>
      </div>
    </div>
    <div class="footer">TECH PLAY ACADEMY</div>
=======
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
>>>>>>> upstream/checkpoint-1
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
