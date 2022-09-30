<template>
  <div>
    <h5>En fechas especiales se podrá recibir descuentos.Nuestro próximo descuento será:</h5>
    <p>{{ message }}</p>
    <b-img :src="src" alt="Plustudio logo" id="logo"></b-img>
  </div>
</template>

<script>
import Discounts from '@/assets/discounts.json';
import logo from '@/assets/PLUSTUDIO-09.png';

export default {
  data() {
    return {
      discounts: Discounts,
      message: null,
      src: logo
    }
  },
  computed: {
    displayMessage() {
      if (this.discounts.length === 0) {
        this.message = 'Próximamente'
      } else if(this.discounts.length === 1) {
        this.message = 'El ' + this.discounts[0].name + ' (' + this.discounts[0].date + ')'
      } else {
        throw new Error('Can\'t add more than 1 date at a time')
      }
    }
  }
}
</script>

<style>
#discountsText {
    font-style: italic;
  }
  #logo {
    margin-right: auto;
    margin-left: auto;
    height: 10%;
    width: 10%;
  }
  #discountsTable {
    margin-left: auto !important;
    margin-right: auto !important;
    width: 75%;
    color: #fff;
    font-family: great, calibri;
  }
  
</style>