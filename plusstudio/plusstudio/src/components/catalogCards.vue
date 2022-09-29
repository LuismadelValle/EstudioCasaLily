<template>
  <div>
    <b-row>
      <h5>Filtrar por:</h5>
    </b-row>
    <b-dropdown id="dropdown-1" text="Años" class="m-md-2">
      <b-dropdown-item v-for="time in times" :key="time.id">{{ time.year }}</b-dropdown-item>
    </b-dropdown>
    <b-dropdown id="dropdown-2" text="Meses" class="m-md-2">
      <b-dropdown-item v-for="month in months" :key="months.id">{{ month.month }}</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
import timeData from '@/assets/timeData.json';
import monthsData from '@/assets/monthsData.json';

export default {
  data() {
    return {
      times: timeData,
      months: monthsData
    }
  }
}
</script>

<style>
  h5 {
    text-align: left;
    margin-left: 5px;
  }
</style>