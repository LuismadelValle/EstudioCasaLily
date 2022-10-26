<template>
  <b-row class="w-100">
    <b-col cols="sm-3" md="auto">
      <b-calendar v-model="value" @context="onContext" locale="es-CU" selected-variant="primary" today-variant="info">
      </b-calendar>
    </b-col>
    <b-col cols="sm-3">
      <p>Seleccione una fecha reservar</p>
      <p>Fecha seleccionada: {{ value.toString() }}</p>
    </b-col>
    <b-col cols="sm-3">
      <p>Seleccione un servicio a recibir: </p>
      <b-form-select v-model="selectedService" size="sm" class="mt-3">
        <b-form-select-option :value="null">Seleccione un servicio</b-form-select-option>
        <b-form-select-option v-for="service in services" value="Nombre"> {{ service.Nombre }}</b-form-select-option>
      </b-form-select>
      <div v-if="displayTypeOfService = true">
        <p>Seleccione una de las categorías :</p>
        <b-form-select v-model="selectedTypeOfService" :options="typeOfService"></b-form-select> 
      </div>     
    </b-col>
    <b-col cols="sm-3">
      <p>Horas disponibles para este día: </p>
      <i>Coming Soon</i>
      <template>
        <div>
          <label for="example-input">Seleccione una hora: </label>
          <b-input-group class="mb-3">
            <b-form-input
              id="example-input"
              v-model="timePicked"
              type="text"
              placeholder="HH:mm"
            ></b-form-input>
            <b-input-group-append>
              <b-form-timepicker
                v-model="timePicked"
                button-only
                right
                locale="es"
                aria-controls="example-input"
              ></b-form-timepicker>
            </b-input-group-append>
          </b-input-group>
        </div>
        <b-button @click="resetAll" :disabled="isDisabled">Resetear seleccion</b-button>
      </template>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import Services from "@/assets/services.json";

export default {
  data() {
    return {
      value: '',
      timePicked: '',
      disabled: false,
      context: null,
      services: Services,
      selectedService: null,
      displayTypeOfService: false,
      selectedTypeOfService: null,
      typeOfService: [
        { value: null, text: 'Seleccione una de las categorías' },
        { value: 'a', text: 'Quinces' },
        { value: 'b', text: 'Fotos de niños' },
        { value: 'c', text: 'Fotos de embarazadas' },
        { value: 'd', text: 'Fotos en pareja' }
      ]
    }
  },
  computed: {
    displayServicesType() {
      if (this.selectedService === "Nombre") {
        this.displayTypeOfService = true
      }
    },
    isDisabled() {
      if (this.selectedService === null && this.value === '' && this.timePicked === '' && this.selectedTypeOfService === null) {
        return !this.disabled
      }
    }
  },
  methods: {
    onContext(ctx: null) {
      this.context = ctx
    }, 
    resetAll() {
      this.selectedService = null
      this.value = ''
      this.timePicked = ''
      this.selectedTypeOfService = null
    }
  }
}
</script>