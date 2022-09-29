<template>
  <div>
    <b-table 
      id="servicesTable"
      responsive
      striped      
      bordered
      small
      :items="items"
      :fields="fields"
    ></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ['first_name', 'last_name', 'age'],
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' }
      ]
    }
  }
}
</script>

<style>
  #servicesTable {
    margin-left: auto !important;
    margin-right: auto !important;
    width: 75%;
  }
</style>