<template>
  <header id="site-header" class="flex-container">
    <h1 id="site-name">Vuegular</h1>
    <nav class="nav-bar">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'the-header',
}
</script>

<style lang="scss" scoped>
@import '../styles/_mixins.scss';

#site-header {
  @include vertical-align($header-height);
  color: #2c3e50;
  border-bottom: 1px solid #eaecef;
  position: fixed;
}
#site-name {
  font-size: 1.8rem;
}
.nav-bar a {
  font-size: 1.2rem;
  margin-left: 2rem;
}
.router-link-exact-active {
  border-bottom: 2px solid $primary-color;
}

@media screen and (max-width: $breakpoint-mobile) {
  .nav-bar a {
    font-size: 1.1rem;
    margin-left: 1.5rem;
  }
}
</style>
