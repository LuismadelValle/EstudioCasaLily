<template>
<nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="/">Inicio</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNavbarButton">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/catalog">Catálogo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/services">Servicios</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Reservar</a>
      </li>
    </ul>
  </div>
</nav>
</template>

<style>
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

  @media only screen and (max-width: 768px) {
    .navbar {
      flex-direction: row;
    }
  }
</style>

<script lang="ts">
  export default {
    data() {
      return {
        collapsed: true,
      }
    },
    methods: {
      toggleNavbarButton() {
        if (this.collapsed = !this.collapsed) {
          document.getElementById('navbarNav').style.display = 'block'
        } else {
          document.getElementById('navbarNav').style.display = 'none'
        }
      }
    }
  }
</script>