<template>
  <div>
    <b-row>
      <h5>Filtrar por:</h5>
    </b-row>
    <b-dropdown id="dropdown-1" text="Años" class="m-md-2">
      <b-dropdown-item id="dropdownYears" v-for="year in years">{{ year.year }}</b-dropdown-item>
    </b-dropdown>
    <b-dropdown id="dropdown-2" text="Meses" class="m-md-2">
      <b-dropdown-item id="dropdownMonths" v-for="month in months"> {{ month.month }}</b-dropdown-item>
    </b-dropdown>
    <b-row>
      <b-col sm="2"></b-col>
      <b-col>
        <b-card>test</b-card>
      </b-col>      
    </b-row>
  </div>
</template>

<script>
import timeData from '@/assets/timeData.json';

export default {
  data() {
    return {
      times: timeData,
      years: [],
      months: []
    }
  }, 
  created() {
    this.years = this.times[0].years
    console.log(this.years)
    this.months = this.times[1].months
    console.log(this.months)
  }
}
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
#dropdownYears:hover, #dropdownMonths:hover {
  background-color: #4D4D58;
}
.dropdown-item, .dropdown-menu {
  background-color: black;
}
</style>