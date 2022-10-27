<template>
  <div>
    <Navbar />
    <div class="container w-50">
      <form @submit="validateInputs">
        <h2 class="mb-3">Autenticarme</h2>
        <div class="input my-2">
          <label for="email">Correo electrónico</label>
          <input class="form-control" type="text" name="email" placeholder="email@adress.com" v-model="email" required />
        </div>
        <div class="input">
          <label for="password">Contraseña</label>
          <input class="form-control" type="password" name="password" placeholder="password123" v-model="password" required />
        </div>
        <div class="alternative-option mt-4">
          ¿No tienes una cuenta? <span>Registrarse</span><br>
          <span>Olvidé mi contraseña</span>
        </div>
        <b-button type="submit" class="mt-4 my-5 btn-secondary" id="login_button" @click="validateUser">
          Autenticarme
        </b-button>
        <b-alert :show="errors" variant="danger">{{ alertText }}</b-alert>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Users from '@/assets/userTestData.json';
import $ from "jquery";

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      email: "",
      password: "",
      users: Users,
      alertText: "",
      errors: false
    }
  },
  methods: {
    validateInputs() {
      var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/gm
      var validEmail = emailRegex.test(this.email)
      var passRegex = /\s?/gm
      var validPass = passRegex.test(this.password)

      if (validPass != true && validEmail == false) {
        $('input[name="password"]').css('color', 'red')
        $('input[name="email"]').css('color', 'red')
        this.errors = true
        this.alertText = 'Existen errores en sus credenciales'
      } else if(validPass != true) {
        $('input[name="password"]').css('color', 'red')
        this.errors = true
        this.alertText = 'La contraseña no debe tener espacios en blanco'
      } else if (validEmail == false) {
        $('input[name="email"]').css('color', 'red')
        this.errors = true
        this.alertText = 'Email incorrecto'
      } else {
        return 
      }
    },
    validateUser() {
      var admin = this.users[0].userName
      var adminPass = this.users[0].password
            
      if (this.email === admin && this.password === adminPass) {
        this.users[0].loginStatus = 'Log in'
        // redirect to main page and send username for text
      } else if (this.users.length > 1) {
        for (let n = 1; n < this.users.length; n++){
          if (this.email === this.users[n].userName && this.password === this.users[n].password) {
            this.users[0].loginStatus = 'Log in'
            // redirect to main page and send username for text
          } else {
            this.errors = true
            this.alertText = 'Usuario no encontrado, cree una cuenta para continuar'
          }
        }
      } else {
        this.errors = true
        this.alertText = 'Usuario no encontrado, cree una cuenta para continuar'
      }
    }
  }
};
</script>