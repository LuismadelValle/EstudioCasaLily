<template>
  <div>
      <label for="pass-live">Ingrese una nueva contraseña:</label>
      <b-form-input type="password" id="pass-live" v-model="newPassword" placeholder="Nueva contraseña">
        <!-- {{ disableSubmitButton }} -->
      </b-form-input>
      <label for="pass2-live">Confirme la contraseña:</label>
      <b-form-input type="password" id="pass2-live" v-model="confirmPassword" placeholder="Confirme contraseña">
        <!-- {{ disableSubmitButton }} -->
      </b-form-input>
      <b-button id="changePassword" @click="checkSamePasswords">Cambiar contraseña</b-button>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      newPassword: '',
      confirmPassword: '',
    }
  }, 
  methods: {
    checkSamePasswords() {
      if (this.newPassword != this.confirmPassword) {
        alert('Las contraseñas deben coincidir')
      } else {
        return
        // change password logic for a user here
      }
    }
  }
}
</script>

<style>
#pass-live, #pass2-live {
  width: 25%;
  margin-left: auto;
  margin-right: auto;
}

#changePassword {
  margin-top: 5px;
}
</style>