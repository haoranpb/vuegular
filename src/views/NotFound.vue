<template>
  <div id="not-found">
    <h2>404 Oops, there is nothing here.</h2>
    <router-link to="/">Take Me Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'not-found',
}
</script>

<style scoped>
#not-found {
  height: calc(100vh - 4rem - 5rem);
  padding-top: 10%;
}
#not-found a {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary-color);
}
#not-found h2 {
  margin-bottom: 1rem;
}
</style>
