<template>
  <div>
    <Navbar /> 
    <div id="welcomeMsg" v-if="!loggedIn">
      <h3>Bienvenido a Plustudio</h3>
    </div>
    <div v-else>
      <Welcome />
    </div>
    <Carousel />
    <Footer />
  </div>
  
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';
import Welcome from '@/components/WelcomeUser.vue';
import Carousel from '@/components/imageCarousel.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  name: 'customerView',
  data() {
    return {
      loggedIn: false
    }
  },
  components: {
    Navbar,
    Welcome,
    Carousel,
    Footer
  }
})
</script>

<style>
  #welcomeMsg {
    text-align: left;
    margin-left: 5px;
  }
</style>