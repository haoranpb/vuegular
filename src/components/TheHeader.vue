<template>
  <header id="site-header" class="container flex-container">
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

<style scoped>
#site-header {
  height: 4rem;
  color: #2c3e50;
  padding-top: 1rem;
  padding-bottom: 1rem;
  line-height: 2rem;
  border-bottom: 1px solid #eaecef;
}
#site-name {
  font-size: 1.8rem;
}
.nav-bar a {
  font-size: 1.2rem;
  margin-left: 2rem;
}
.router-link-exact-active {
  border-bottom: 2px solid var(--primary-color);
}
</style>
