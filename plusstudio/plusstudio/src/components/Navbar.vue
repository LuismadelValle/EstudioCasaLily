<template>
  <div class="fluid w-100">
    <b-row>
      <b-navbar toggleable="lg">
        <b-col class="col-sm">
          <b-navbar-brand href="/">
            <b-img :src="src" alt="Plustudio logo" height="50" width="50"></b-img>
          </b-navbar-brand>
        </b-col>
        <b-col cols="7"></b-col>
        <b-col id="usefulLinks" class="col-sm"> 
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="/catalog">Catálogo</b-nav-item>
              <b-nav-item href="/services">Servicios</b-nav-item>
              <b-nav-item href="#">Reservar</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                  <em>Mi Sesión</em>
                </template>
                <b-dropdown-item href="#">Autenticarme</b-dropdown-item>
                <b-dropdown-item href="#">Registrarme</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-col>
      </b-navbar>
    </b-row>
  </div>
</template>

<style>
  #usefulLinks {
    margin-right: 10px;    
  }
  a:link {
    color: #fff !important;
    text-decoration: none !important;     
  }
  a:visited {
    color: lightblue !important;
    text-decoration: none !important;
  }
  a:hover {
    color: lightgray !important;
    text-decoration: none !important; 
  }
  a:active {
    color: #80bfff !important;
    text-decoration: none !important;
  }
  .navbar-brand {
    margin-left: 5px;
  }
  .nav-item {
    display: flex;
    margin-left: auto;
  }
  .navbar-toggler {
    margin-right: 7px;
  }
  .ml-4 {
    margin-left: 5px;
  }
  .dropdown-item, .dropdown-menu {
    background-color: black !important;
  }
  .dropdown-item:hover {
    background-color: #4D4D58 !important;
  }
  @media only screen and (max-width: 768px) {
    .navbar {
      flex-direction: row;
    }
  }
</style>

<script>
import logo from '@/assets/PLUSTUDIO-09.png';

export default {
  data() {
    return {
      src: logo
    }
  }
}
</script>