<template>
  <div>
    <Navbar />
    <Footer />
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Users from '@/assets/userTestData.json';

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      users: Users
    }
  }
}
</script>