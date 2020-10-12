<template>
  <div class="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar"

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
  html, body {
    margin: 0;
    padding: 0;
  }

  .app {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content;
  }
</style>
