<template>
  <div>
    <b-table 
      id="servicesTable"
      responsive     
      bordered
      small
      :items="services"
    ></b-table>
    <b-container fluid>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-small">Seleccionar moneda:</label>
        </b-col>
        <b-col sm="2">
          <b-form-select id="currencyDropdown" v-model="selectedCurrency" :options="currencySelect" class="w-100"></b-form-select>
        </b-col>
        <b-col sm="2">
          <label for="input-small">Ingresar tasa de cambio:</label>
        </b-col>
        <b-col sm="2">
          <b-form-input id="input-small" size="sm" placeholder="Actualizar precios" v-model="changeRate"></b-form-input>
        </b-col>
        <b-col sm="1" class="pb-2">
          <b-button size="sm" @click="updatePrices">Actualizar</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import services from '@/assets/services.json';

export default {
  data() {
    return {
      // fields: ['Nombre del servicio', 'Cantidad de fotos*', 'Precio base (USD)', 'Precio MN', 'Precio Euros', 'Precio MLC'],
      services: services,
      changeRate: null,
      currencySelect: [
        'Euros',
        'MLC',
        'MN'
      ],
      selectedCurrency: null
    }
  }, 
  methods: {
    updatePrices() {
      const currency = this.selectedCurrency;
      const change = this.changeRate;
      var newPrice = 0

      if (currency === 'Euros') {
        for (let i = 0; i < services.length; i++) {
          newPrice = change * this.services[i].PrecioBase;
          this.services[i].PrecioEuros = newPrice
          this.services[i].PrecioMn = 0
          this.services[i].PrecioMLC = 0
        }
      } else if (currency === 'MLC') {
        for (let i = 0; i < services.length; i++) {
          newPrice = change * this.services[i].PrecioBase;
          this.services[i].PrecioEuros = 0
          this.services[i].PrecioMn = 0
          this.services[i].PrecioMLC = newPrice
        }
      } else if (currency === 'MN') {
        for (let i = 0; i < services.length; i++) {
          newPrice = change * this.services[i].PrecioBase;
          this.services[i].PrecioEuros = 0
          this.services[i].PrecioMn = newPrice
          this.services[i].PrecioMLC = 0
        }
      } else {
        throw new Error('No se acepta esta moneda para el pago')
      }
    }
  }
}
</script>

<style>
#servicesTable {
    margin-left: auto !important;
    margin-right: auto !important;
    width: 75%;
    color: #fff;
    font-family: great, calibri;
  }
  #currencyDropdown {
    border-radius: 5px;
    background-color: white;
  }
</style>