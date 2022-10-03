<template>
  <div id="app" class="flex">
    <router-view />
  </div>
</template>

<style>
#app {
  color: #fff;
  font-family: great;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #4D4D58;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow-x: none;
}
*,*::before,*::after{
  margin: 0;
  padding:0;
}

</style>

