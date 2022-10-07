<template>
  <div>
    <b-row>
      <b-col cols-sm="2" class="ml-2 my-2">
        <b-button v-b-modal.modal-center>Filtrar por: </b-button>
      </b-col>
      <b-col cols="10"></b-col>
      <b-modal id="modal-center" centered>
        <b-container fluid>
          <b-col>
            <b-dropdown id="dropdown-1" text="Años" class="m-md-2">
              <b-dropdown-item id="dropdownYears" v-for="year in years">{{
                year.year
                }}</b-dropdown-item>
            </b-dropdown>
          </b-col>
        </b-container>
        <b-container fluid>
          <b-col>
            <b-dropdown id="dropdown-2" text="Meses" class="m-md-2">
              <b-dropdown-item id="dropdownMonths" v-for="month in months">
                {{ month.month }}</b-dropdown-item>
            </b-dropdown>
          </b-col>
        </b-container>
      </b-modal>
    </b-row>
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
    <b-row>
      <b-pagination
        v-model="paginationDetail" 
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="catalogCard"
        align="right"
        size="sm"
      ></b-pagination>
    </b-row>
  </div>
</template>

<script>
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
.dropdown-item,
.dropdown-menu {
  background-color: black;
}
.card-body {
  background-color: black;
  border: none;
}
</style>
