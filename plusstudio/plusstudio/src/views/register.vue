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

        <b-form-group description="Incluya mayúsculas, números y caracteres especiales"> 
          <label class="sr-only" for="UserPassword">Contraseña</label>
          <b-form-input id="UserPassword" type="password" placeholder="Ingrese una contraseña" class="mb-2 mr-sm-2 mb-sm-0" v-model="form.password" required>
            {{ passwordStrength }}
          </b-form-input>
          <b-progress id="progressBar" height="7px" :value="value" :variant="variant" ></b-progress>
        </b-form-group>

        <label class="sr-only" for="confirmPassword">Confirmar contraseña</label>
        <b-form-input id="confirmPassword" type="password" placeholder="Introduzca nuevamente la contraseña" class="mb-2 mr-sm-2 mb-sm-0" v-model="form.confirmPassword" required>
        </b-form-input>
                
        <b-button id="newAccount" type="submit" variant="primary" @click="validateUserName($event); validateUserLastname($event); validatePassword($event); passwordLengthCheck($event); samePasswords($event)">Crear cuenta</b-button>
        <b-button id="resetData" type="reset" variant="danger">Resetear</b-button>
      </b-form>

      <RegisterLoginWith usageText='Crear cuenta usando: ' />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import RegisterLoginWith from '@/components/registerLoginWith.vue';
import Users from '@/assets/userTestData.json';


export default {
  components: {
    Navbar,
    RegisterLoginWith,
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
      users: Users,
      value: 0,
      variant: ''
    }
  },
  computed: {
    passwordStrength() {
      var numbRegex = /\d/gm
      var specCharRegex = /\W/gm
      var upperCaseRegex = /[A-Z]/gm

      if (this.value <= 25) {
        this.variant = 'danger'
      } else if (this.value > 25 && this.value <= 50) {
        this.variant = 'warning'
      } else if (this.value > 50 && this.value <= 75) {
        this.variant = 'info'
      } else if (this.value > 75) {
        this.variant = 'success'
      }

      if (this.form.password.length == 0) {
        this.value = 0
        this.variant = ''
      } else if (this.form.password.length > 0 && this.form.password.length <= 4) {
        this.value = (this.form.password.length * 100) / 16
      } else if (this.form.password.length > 4 && this.form.password.length <= 8) {
        if (numbRegex.test(this.form.password) == false) {
          this.value = ((this.form.password.length * 100) / 16) - 5
        } else if (numbRegex.test(this.form.password) == false && specCharRegex.test(this.form.password) == false) {
          this.value = ((this.form.password.length * 100) / 16) - 10
        } else if (numbRegex.test(this.form.password) == false && specCharRegex.test(this.form.password) == false && upperCaseRegex.test(this.form.password) == false) {
          this.value = ((this.form.password.length * 100) / 16) - 15
        } else {
          this.value = ((this.form.password.length * 100) / 16)
        }
      } else if (this.form.password.length > 8 && this.form.password.length <= 12) {
        if (numbRegex.test(this.form.password) == false) {
          this.value = ((this.form.password.length * 100) / 16) - 5
        } else if (numbRegex.test(this.form.password) == false && specCharRegex.test(this.form.password) == false) {
          this.value = ((this.form.password.length * 100) / 16) - 10
        } else if (numbRegex.test(this.form.password) == false && specCharRegex.test(this.form.password) == false && upperCaseRegex.test(this.form.password) == false) {
          this.value = ((this.form.password.length * 100) / 16) - 15
        } else {
          this.value = ((this.form.password.length * 100) / 16)
        }
      } else if (this.form.password.length > 12 && this.form.password.length <= 16) {
        if (numbRegex.test(this.form.password) == false) {
          this.value = ((this.form.password.length * 100) / 16) - 5
        } else if (numbRegex.test(this.form.password) == false && specCharRegex.test(this.form.password) == false) {
          this.value = ((this.form.password.length * 100) / 16) - 10
        } else if (numbRegex.test(this.form.password) == false && specCharRegex.test(this.form.password) == false && upperCaseRegex.test(this.form.password) == false) {
          this.value = ((this.form.password.length * 100) / 16) - 15
        } else {
          this.value = ((this.form.password.length * 100) / 16)
        }
      } else {
        this.variant = 'danger'
        alert('Solo 16 caracteres máximo en la contraseña')
      }
    }
  },
  methods: {
    onSubmit(event: { preventDefault: () => void; }) {
      var userLength = this.users.length
      let newKey = userLength + 1

      event.preventDefault()
      this.users.push({
        key: newKey,
        userName: this.form.name,
        userLastName: this.form.lastname,
        userEmail: this.form.email,
        password: this.form.password,
        role: 'None',
        loginStatus: 'Not Active',
        disabled: false
      })

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

      alert('Se le envio un correo para activar el usuario')
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
      var passRegex = /\s/gm
      var passStrength = /^(?=.*[A - Z])(?=.*[!@#$*])(?=.*[0 - 9])(?=.*[a - z]).{4,16}$/gm

      if (passRegex.test(this.form.password) == true) {
        event.preventDefault()
        alert('Contraseña invalida, no debe tener espacios')
        this.form.password = ''
        this.form.confirmPassword = ''
      } else if (passRegex.test(this.form.password) == true) {
        event.preventDefault()
        alert('Contraseña invalida, debe contener números, caracteres especiales y mayúsculas')
        this.form.password = ''
        this.form.confirmPassword = ''
      }
    }, 
    passwordLengthCheck(event: { preventDefault: () => void; }) {
      if (this.form.password.length < 4) {
        event.preventDefault()
        alert('Contraseña invalida, no debe tener menos de 4 caracteres')
        this.form.password = ''
        this.form.confirmPassword = ''
      } else if (this.form.password.length > 16) {
        event.preventDefault()
        alert('Contraseña invalida, no debe exceder de 16 caracteres')
        this.form.password = ''
        this.form.confirmPassword = ''
      } 
    },
    samePasswords(event: { preventDefault: () => void; }) {
      if (this.form.password !== this.form.confirmPassword) {
        event.preventDefault()
        alert('Deben coincidir las contraseñas')
        this.form.password = ''
        this.form.confirmPassword = ''
      }
    }
  }
}
</script>

<style>
h2{
    margin-left: 5px;
    text-align: left !important;
  }
  #__BVID__25__BV_description_ {
    color: white !important;
  }
  #registerForm{
    width: 25% !important;
    margin-right: auto;
    margin-left: auto;
  }
  #newAccount, #resetData {
    margin-top: 10px;
    margin-bottom: 15px !important;
    margin-right: auto;
    margin-left: auto;  
  }
  #UserName, #UserLastName, #UserEmail, #UserPassword, #confirmPassword, .input-group-text {
    margin-top: 5px !important;
    border-radius: 2px !important;
  }
</style>