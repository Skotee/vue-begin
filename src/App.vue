<template>
  <v-app id="app">
    <Navbar />
    <div class="main-view">
      <router-view />
    </div>
    <Snackbar></Snackbar>
  </v-app>
</template>

<script>
import Snackbar from "./components/Snackbar";
import Navbar from "./components/Navbar";

export default {
  name: "app",
  components: {
    Snackbar, Navbar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
</style>
