<template>
  <div>
    <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-1" title="Sidebar" bg-variant="dark" text-variant="light" no-header shadow>
      <div class="px-3 py-2">
        <p>
          Seleccione un opcion
        </p>
      </div>
      <div class="p-3">
        <nav class="mb-3">
          <b-nav vertical id="optionsVertical">
            <b-nav-item active @click="hide">Active</b-nav-item>
            <b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
            <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
          </b-nav>
        </nav>
      </div>
    </b-sidebar>
  </div>
</template>

<style scoped>
#optionsVertical {
  text-align: left !important;
}
</style>