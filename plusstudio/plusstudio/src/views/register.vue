<template>
  <div>
    <Navbar />
    <div>
      <h2>Registrarse</h2>
      <b-form id="registerForm" @submit="onSubmit"  @reset="onReset" v-if="show" inline>
        <label class="sr-only" for="UserName">Nombres</label>
        <b-form-input id="UserName" type="text" placeholder="Ingrese su nombre" class="mb-2 mr-sm-2 mb-sm-0" required v-model="form.name"></b-form-input>
      
        <label class="sr-only" for="UserLastName">Apellidos</label>
        <b-form-input id="UserLastName" type="text" placeholder="Ingrese su apellido" class="mb-2 mr-sm-2 mb-sm-0" v-model="form.lastname"></b-form-input>

        <label class="sr-only" for="UserEmail">Correo electrónico</label>
        <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input id="UserEmail" type="email" placeholder="Ingrese su correo"  required v-model="form.email"></b-form-input>
        </b-input-group>

        <label class="sr-only" for="UserPassword">Contraseña</label>
        <b-form-input id="UserPassword" type="password" placeholder="Ingrese una contraseña" class="mb-2 mr-sm-2 mb-sm-0" v-model="form.password" required>
        </b-form-input>

        <label class="sr-only" for="confirmPassword">Confirmar contraseña</label>
        <b-form-input id="confirmPassword" type="password" placeholder="Introduzca nuevamente la contraseña" class="mb-2 mr-sm-2 mb-sm-0" v-model="form.confirmPassword" required>
        </b-form-input>
                
        <b-button id="newAccount" type="submit" variant="primary" @click="validateUserName($event); validateUserLastname($event); validatePassword($event)">Crear cuenta</b-button>
        <b-button id="resetData" type="reset" variant="danger">Resetear</b-button>
      </b-form>

      <p>Crear cuenta usando: </p>
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google"
          viewBox="0 0 16 16">
          <path
            d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
        </svg>
      </a>
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook"
          viewBox="0 0 16 16">
          <path
            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
        </svg>
      </a>

    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Users from '@/assets/userTestData.json';

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        lastname: ''
      },
      show: true,
      users: Users
    }
  },
  methods: {
    onSubmit(event: { preventDefault: () => void; }) {
      event.preventDefault()
      console.log('submit user')
    },
    onReset(event: { preventDefault: () => void; }) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.lastname = ''
      this.form.password = ''
      this.form.confirmPassword = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    validateUserName(event: { preventDefault: () => void; }) {
      var noNumber = /\d/gm
      var noEmoji = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gm

      if (noNumber.test(this.form.name) === true || noEmoji.test(this.form.name) === true) {
        event.preventDefault()
        alert('El nombre no puede contener ni números ni emojis')
        this.form.name = ''
      }
    },
    validateUserLastname(event: { preventDefault: () => void; }) {
      var noNumber = /\d/gm
      var noEmoji = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gm

      if (noNumber.test(this.form.lastname) === true || noEmoji.test(this.form.lastname) === true) {
        event.preventDefault()
        alert('Los apellidos no pueden contener ni números ni emojis')
        this.form.lastname = ''
      }
    }, 
    validateEmail(event: { preventDefault: () => void; }) {
      var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/gm

      if (emailRegex.test(this.form.email) == false) {
        event.preventDefault()
        alert('Email invalido')
        this.form.email = ''
      }
    },
    validatePassword(event: { preventDefault: () => void; }) {
      var passRegex = /\s?/gm

      if (passRegex.test(this.form.password) == false || passRegex.test(this.form.confirmPassword) == false) {
        event.preventDefault()
        alert('Contraseña invalida')
        this.form.password = ''
        this.form.confirmPassword = ''
      }

      if (this.form.password !== this.form.confirmPassword) {
        event.preventDefault()
        alert('Deben coincidir las contraseñas')
        this.form.password = ''
        this.form.confirmPassword = ''
      }
    },
    passwordStrength() {
      var passStrength = /^(?=.*[A - Z])(?=.*[!@#$*])(?=.*[0 - 9])(?=.*[a - z]).{4,16}$/gm

      if (passStrength.test(this.form.password) == true) {
        return
      }
    }
  }
}
</script>

<style scoped>
  h2{
    margin-left: 5px;
    text-align: left !important;
  }
  #registerForm{
    width: 25% !important;
    margin-right: auto;
    margin-left: auto;
  }
  #newAccount, #resetData {
    margin-top: 10px;
    margin-bottom: 15px !important;
    margin-left: 5px;  
  }
  #UserName, #UserLastName, #UserEmail, #UserPassword, #confirmPassword {
    margin-bottom: 5px !important;
  }
</style>