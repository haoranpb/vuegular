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
@import './styles/_mixins.scss';
$main-horizontal-padding: 3%;

.flex-container {
  @include container($container-padding);
  display: flex;
  justify-content: space-between;
}
.main-container {
  @include container($container-padding);
  height: calc((100vh - #{$header-height} - #{$footer-height}));
  padding-top: $main-horizontal-padding;
  padding-bottom: $main-horizontal-padding;
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

@media screen and (max-width: $breakpoint-tablet) {
  .main-container {
    @include container($tablet-container-padding);
  }

  .flex-container {
    @include container($tablet-container-padding);
  }
}
</style>
