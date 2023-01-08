<template>
  <div>
    <AdminNavbar />
    <div v-if="services">
      <ServicesTable v-on:openServices="openServiceTable($event)" />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import AdminNavbar from '@/components/adminNavbar.vue';
import ServicesTable from '@/components/servicesChangesFromAdmin.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    AdminNavbar,
    ServicesTable,
    Footer
  },
  data() {
    return {
      services: false
    }
  },
  methods: {
    openServiceTable(value: boolean) {
      this.services = value
    }
  }
}
</script>