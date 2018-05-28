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
</style>
