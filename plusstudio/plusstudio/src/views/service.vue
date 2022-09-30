<template>
  <div>
    <Navbar />
    <ServTable />
    <p id="notesForPrice">(*) Para la edición la cantidad de imagenes determina el precio de estas, solo se muestra un precio de referencia promedio.<br> 
    El precio depende de la calidad de la imagen y del tiempo disponible para hacer la edición en base a la reserva que se haga</p>
    <Discounts />
    <Footer />
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';
import ServTable from '@/components/servicesTable.vue';
import Discounts from '@/components/discounts.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    ServTable,
    Discounts,
    Footer
  }
}
</script>

<style>
#notesForPrice {
  text-align: left !important;
  font-size: 10px;
  font-style: italic;
  margin-left: 5px;
}
</style>

