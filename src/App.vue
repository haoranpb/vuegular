<template>
  <div id="app">
    <the-header />
    <h1>Hello Vuejs!</h1>
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

<style scoped>
h1 {
  color: #4fc08d;
}
</style>
