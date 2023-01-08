<template>
  <div>
    <b-table id="servicesTable" responsive bordered small :items="services"></b-table>
  </div>
</template>

<script lang="ts">
import services from '@/assets/services.json';

export default {
  data() {
    return {
      // fields: ['Nombre del servicio', 'Cantidad de fotos*', 'Precio base (USD)', 'Precio MN', 'Precio Euros', 'Precio MLC'],
      services: services
    }
  }
}
</script>