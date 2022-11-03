<template>
  <div>
    <Navbar />
    <h3>Reservar una cita</h3>
    <Calendar />
    <p id="sideNotesForReserve">(*)Algunos servicios pueden ocupar todo el día</p>    
    <Payment />
    <Footer />
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';
import Calendar from '@/components/calendar.vue';
import Payment from '@/components/paymentsLinks.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    Calendar,
    Payment,
    Footer,
  }  
}
</script>

<style>
h3 {
  text-align: left !important;
  margin-left: 5px;
}
#sideNotesForReserve {
  text-align: left !important;
  font-size: 10px;
  font-style: italic;
  margin-left: 5px;
}
</style>