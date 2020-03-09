<template>
  <div id="app">
    <the-header />
    <router-view class="container main-container"></router-view>
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
:root {
  --primary-color: #4fc08d;
  --container-padding: 15%;
  --header-height: 4rem;
  --footer-height: 5rem;
}
.container {
  padding-left: var(--container-padding);
  padding-right: var(--container-padding);
  width: 100%;
}
.flex-container {
  display: flex;
  justify-content: space-between;
}
.main-container {
  height: calc(100vh - var(--header-height) - var(--footer-height));
}
a {
  text-decoration: none;
  color: black;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
