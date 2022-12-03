<template>
  <div>
    <Navbar />
    <div class="container w-50">
      <form @submit="validateUser">
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
          ¿No tienes una cuenta? <a href="/register">Registrarse</a><br>
          <a href="/forgotPassword">Olvidé mi contraseña</a>
        </div>
        <b-button type="submit" class="mt-4 my-5 btn-secondary" id="login_button" @click="validateUser($event)">
          Autenticarme
        </b-button>
        <b-alert :show="errors" variant="danger">{{ alertText }}</b-alert>
      </form>
    </div>
    <RegisterLoginWith usageText='Autenticarse usando: ' />
    <Footer />
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import RegisterLoginWith from '@/components/registerLoginWith.vue';
import Users from '@/assets/userTestData.json';

import $ from "jquery";

export default {
  components: {
    Navbar,
    RegisterLoginWith,
    Footer
  },
  data() {
    return {
      email: "",
      password: '',
      retries: 0,
      maxRetries: 3,
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
    validateUser(event: { preventDefault: () => void; }) {
      // for (let m = 0; m < this.users.length; m++) {
      //   if(this.users[n].disabled = true){
          // prevent next block of code from executing, investigate how
        // }
      // }

      for (let n = 0; n < this.users.length; n++) {
        if (this.email === this.users[n].userEmail && this.password === this.users[n].password) {
          this.users[n].loginStatus = 'Log in'
          if (this.users[n].role === "Administrator") {
            this.$router.push('/admin')
          } else {
            this.$router.push('/')
          }
        } else if (this.email === this.users[n].userEmail && this.password !== this.users[n].password) {
          event.preventDefault()
          this.errors = true
          this.alertText = 'Contraseña incorrecta'
          this.retries++
          this.users[n].disabled = true
        } else if (this.email !== this.users[n].userEmail && this.password === this.users[n].password) {
          event.preventDefault()
          this.errors = true
          this.alertText = 'Combinación usuario-contraseña invalida'
          this.retries++
          this.users[n].disabled = true
        } else {
          event.preventDefault()
          this.errors = true
          this.alertText = 'Usuario no encontrado, cree una cuenta para continuar'
        }
      }

      if (this.retries >= this.maxRetries) {
        this.errors = true
        this.alertText = 'Este usuario ha sido desactivado, genere una nueva contraseña para activarlo'
        // send to generate new password
      }
    }
  }
};
</script>