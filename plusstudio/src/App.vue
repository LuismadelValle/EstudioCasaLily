<template>
  <div id="app" fluid class="flex">
    <headerNav />
    <imageCarousel />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import headerNav from './components/header.vue';
import imageCarousel from './components/imageCarousel.vue';
import Footer from './components/Footer.vue';

export default Vue.extend({
  name: 'App',
  components: {
    headerNav,
    imageCarousel,
    Footer
  }
});
</script>

<style>
#app {
  color: #fff;
  font-family: great;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #4D4D58;
  width: 100%;
  height: 100%;
  overflow-x: none;
}
</style>
