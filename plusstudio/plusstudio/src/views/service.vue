<template>
  <div>
    <Navbar />
    <ServTable />
    <Footer />
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';
import ServTable from '@/components/servicesTable.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    ServTable,
    Footer
  }
}
</script>