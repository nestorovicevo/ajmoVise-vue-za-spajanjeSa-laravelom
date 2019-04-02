<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <AddContact/>
    <AppContacts/>
  </div>
</template>

<script>
import AddContact from '@/components/AddContact'
import AppContacts from '@/components/AppContacts'

export default {
  name: 'app',
  components: {
    AddContact,
    AppContacts
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
  margin-top: 60px;
}
</style>
