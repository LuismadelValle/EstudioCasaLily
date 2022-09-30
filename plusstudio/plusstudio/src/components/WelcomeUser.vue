<template>
  <div>
    <h3 v-for="user in users">Bienvenido {{ user.userName }} a Plustudio</h3>
  </div>
</template>

<script>
import userTestData from '@/assets/userTestData.json';

export default {
  data() {
    return {
      users: userTestData,
    }
  }
}
</script>