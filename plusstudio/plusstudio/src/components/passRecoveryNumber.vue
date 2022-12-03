<template>
  <div role="group">
    <label for="input-live">Ingrese el número enviado a su correo:</label>
    <b-form-input
      type="number"
      id="input-live"
      v-model="number"
      :state="nameState"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Código de 6 números"
      trim
    >
    </b-form-input>
    <b-button id="submitConfirmationNumber" @click="readNumber">Comprobar</b-button>
    

    <!-- This will only be shown if the preceding input has an invalid state -->
    <b-form-invalid-feedback id="input-live-feedback">
      El código debe ser de 6 números
    </b-form-invalid-feedback>

  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      number: 0
    }
  },
  computed: {
    nameState() {
      let numberString = this.number.toString()

      if (numberString.length < 6) {
        return false
      } else if (numberString.length > 6) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    readNumber() {
      // piece of code for backend request
      this.$emit('hideNumberRequest', false)
    }
  }
}
</script>

<style>
#input-live {
  width: 25%;
  margin-left: auto;
  margin-right: auto;
}
#submitConfirmationNumber {
  margin-top: 5px;
}
</style>