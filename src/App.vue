<template>
  <div id="app">
    <div class="im-wrapper">
      <AppHeader/>
      <AppFooter/>
    </div>
  </div>
</template>

<script>
  import AppHeader from "./components/AppHeader.vue";
  import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
  @import './assets/scss/app.scss';
</style>
