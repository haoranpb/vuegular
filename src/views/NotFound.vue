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

<style lang="scss" scoped>
#not-found {
  padding-top: 10%;

  a {
    font-size: 1.1rem;
    font-weight: 600;
    color: $primary-color;
  }

  h2 {
    margin-bottom: 1rem;
  }
}
</style>
