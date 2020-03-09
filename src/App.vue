<template>
  <div id="app">
    <the-header />
    <router-view></router-view>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<style>
a {
  text-decoration: none;
  color: rgb(88, 96, 105);
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
