<template>
  <v-app id="app">
    
    <Employees msg="Customer CRUD App"/>
  </v-app>
</template>

<script>
  import Employees from './components/Employees.vue'

  export default {
    name: 'app',
    components: {
      Employees
    },
    data() {
      return {
        msg: 'xd'
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
