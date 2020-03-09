<template>
  <div id="app">
      <AppHeader/>
      <AppMain/>
      <AppFooter/>
  </div>
</template>

<script>
  import AppHeader from "./components/AppHeader.vue";
  import AppMain from "@/components/AppMain";
  import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}
</script>

<style lang="scss">
  @import 'assets/scss/app';
</style>
