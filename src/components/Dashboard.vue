<template>
  <div class="dashboard">
    Dashboard
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

export default {
  name: 'Dashboard',
  components: {
    Header, Footer, Content,
  },
};
</script>

<style scoped>
  .dashboard {
    text-align: center;
  }
</style>
