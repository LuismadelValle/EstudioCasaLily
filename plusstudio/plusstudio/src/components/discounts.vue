<template>
  <div>
    <h5>En fechas especiales se podrá recibir descuentos.Nuestro próximo descuento será:</h5>
    <p id="discountsText">{{ message }}</p>
  </div>
</template>

<script>
import Discounts from '@/assets/discounts.json';

export default {
  data() {
    return {
      discounts: Discounts,
      message: null
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
</style>