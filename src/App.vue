<template>
  <div id="app">
    <the-header />
    <router-view class="main-container"></router-view>
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

<style lang="scss">
@import './styles/_ placeholders.scss';

.flex-container {
  @extend %container;
  display: flex;
  justify-content: space-between;
}
.main-container {
  @extend %container;
  height: calc((100vh - #{$header-height} - #{$footer-height}));
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
