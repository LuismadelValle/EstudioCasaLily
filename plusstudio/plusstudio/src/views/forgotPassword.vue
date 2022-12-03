<template>
  <div>
    <Navbar />
    <div v-if="passRecoveryEmail">
      <EmailPassRecovery v-on:hideEmailRequest="hideEmailRequestOn($event)" />
    </div>
    <div v-if="numberInserted">
      <PassRecoveryNumber v-on:hideNumberRequest="hideNumberRequestOn($event)" />
    </div>
    <div v-if="changePassword">
      <ChangePassword />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import PassRecoveryNumber from '@/components/passRecoveryNumber.vue';
import EmailPassRecovery from '@/components/emailPassRecovery.vue';
import ChangePassword from '@/components/changePassword.vue';
import Users from '@/assets/userTestData.json';

export default {
  components: {
    Navbar,
    PassRecoveryNumber,
    EmailPassRecovery,
    ChangePassword,
    Footer
  },
  data() {
    return {
      users: Users,
      passRecoveryEmail: true,
      numberInserted: false,
      changePassword: false
    }
  },
  methods: {
    hideEmailRequestOn(value: boolean) {
      this.passRecoveryEmail = value 
      this.numberInserted = true     
    },
    hideNumberRequestOn(value: boolean) {
      this.numberInserted = value  
      this.changePassword = true 
    }
  }
}
</script>

<style scoped>
/* .footer {
  position: fixed;
  bottom: 0;
} */
</style>