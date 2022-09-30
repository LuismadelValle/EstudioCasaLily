<template>
  <div>
    <h5>En fechas especiales se podrá recibir descuentos.Nuestro próximo descuento será:</h5>
    <p id="discountsText">{{ message }}</p>
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
  mounted() {
    if (this.discounts == '') {
        this.message = 'Próximamente'
    } else {
        return
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
</style>