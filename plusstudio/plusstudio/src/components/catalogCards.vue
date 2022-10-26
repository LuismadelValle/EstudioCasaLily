<template>
  <div>
    <b-row>
      <b-col cols-sm="2" class="ml-2 my-2">
        <b-button v-b-modal.modal-center>Filtrar por: </b-button>
      </b-col>
      <b-col cols="10">
        <div v-if="filtersApplied.length > 0">
          <b-row>
            <b-col cols="2">
              <p>Filtros aplicados: </p>
            </b-col>
            <b-col cols="1">
              <p>Año: {{ filtersApplied[0] }}</p>
            </b-col>
            <b-col cols="1">
              <p>Mes: {{ filtersApplied[1] }}</p>
            </b-col>
            <b-col cols="1"></b-col>
            <b-col cols="5">
              <b-button id="resetFiltersButton" @click="clearFilters">Resetear</b-button>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
    <b-container>
      <b-modal id="modal-center" centered body-bg-variant="light" hide-header hide-footer>
        <div>
          <b-button id="closeModalButton" class="mr-right" variant="danger" @click="$bvModal.hide('modal-center')">X
          </b-button>
        </div>
        <b-row>
          <p>Parámetros de busqueda</p>
          <b-col>
            <b-form-select v-model="selectYear">
              <b-form-select-option :value="null">Seleccione un año</b-form-select-option>
              <b-form-select-option v-for="year in years" :value="year">{{ year.year }}</b-form-select-option>
            </b-form-select>
          </b-col>
           <b-col>
            <b-form-select v-model="selectMonth">
              <b-form-select-option :value="null">Seleccione un mes</b-form-select-option>
              <b-form-select-option v-for="month in months" :value="month">{{ month.month }}</b-form-select-option>
            </b-form-select>
          </b-col>
        </b-row>
        <b-row>
          <b-button-group>
            <b-button @click="$bvModal.hide('modal-center'); filtersSelected()">Aceptar</b-button>
            <b-button variant="danger" @click="$bvModal.hide('modal-center'); resetData();">Cancelar</b-button>
          </b-button-group>
        </b-row>
      </b-modal>
    </b-container>
    <b-row>
      <b-col sm="3" id="catalogCard" v-for="card in cards" :key="cards.id" :per-page="perPage" :current-page="paginationDetail">
        <b-card
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-title>
            {{ card.cardTitle }}
          </b-card-title>
          <b-card-text>
            <i>Categoría del servicio:</i> {{ card.serviceType }}<br>
            <i>Fecha:</i> {{ card.fullDate }}
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <!-- <b-row>
      <b-pagination
        v-model="paginationDetail" 
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="catalogCard"
        align="right"
        size="sm"
      ></b-pagination>
    </b-row> -->
  </div>
</template>

<script lang="ts">
import timeData from "@/assets/timeData.json";
import cards from "@/assets/cards.json";

export default {
  data() {
    return {
      times: timeData,
      cards: cards,
      perPage: 3,
      paginationDetail: 1,
      years: [],
      months: [],
      selectYear: null,
      selectMonth: null,
      filtersApplied: []
    };
  },
  created() {
    this.years = this.times[0].years;
    console.log(this.years);
    this.months = this.times[1].months;
    console.log(this.months);
  },
  computed: {
    rows() {
      return this.cards.length
    }
  }, methods: {
    resetData() {
      this.selectYear = null
      this.selectMonth = null
    },
    filtersSelected() {
      this.filtersApplied.push(this.selectYear.year)
      this.filtersApplied.push(this.selectMonth.month)
    },
    clearFilters() {
      this.filtersApplied = []
    }
  }
};
</script>

<style>
h5 {
  text-align: left;
  margin-left: 5px;
}
#dropdown-1 {
  position: absolute;
  left: 5px;
}
#dropdown-2 {
  position: absolute;
  left: 85px;
}
#dropdownYears:hover,
#dropdownMonths:hover {
  background-color: #4d4d58;
}
#closeModalButton {
  border-radius: 5px;
  margin-right: 5px !important;
  height: 20px;
  width: 20px;
  font-size: 10px !important;
  text-align: center !important;

}
.dropdown-item,
.dropdown-menu {
  background-color: black;
}
.card-body {
  background-color: black;
  border: none;
}
</style>
