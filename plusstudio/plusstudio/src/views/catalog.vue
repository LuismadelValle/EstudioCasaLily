<template>
  <div>
    <Navbar />
    <Cards />
    <Footer />
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';
import Cards from '@/components/catalogCards.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    Cards,
    Footer
  }
}
</script>