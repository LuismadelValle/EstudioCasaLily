<template>
  <div>
    <AdminNavbar />
    <AdminSideBar />
    <Footer />
  </div>
</template>

<script lang="ts">
import AdminNavbar from '@/components/adminNavbar.vue';
import AdminSideBar from '@/components/adminSideBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    AdminNavbar,
    AdminSideBar,
    Footer
  },
  data() {
    return
  }
}
</script>