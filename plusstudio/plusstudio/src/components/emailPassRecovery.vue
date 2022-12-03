<template>
  <div>
    <label for="input-live">Ingrese su correo electrónico:</label>
    <b-form-input type="email" id="input-live" v-model="email" placeholder="Correo electrónico">
      <!-- {{ disableSubmitButton }} -->
    </b-form-input>
    <b-button @click="sendEmailForRecovery">Cambiar contraseña</b-button>
  </div>
</template>

<script lang="ts">
import $ from "jquery";

export default {
  data() {
    return {
      email: ''
    }
  },
  computed: {
    // this function needs fixes
    // disableSubmitButton() {
    //   var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/gm

    //   console.log(emailRegex.test(this.email))
    //   if (emailRegex.test(this.email) == true) {
    //     $('button').prop('disabled', false)
    //   } else {
    //     $('button').prop('disabled', true)
    //   }
    // }
  },
  methods: {
    sendEmailForRecovery() {
      // piece of code for backend request
      this.$emit('hideEmailRequest', false)
    }
  }
}
</script>
