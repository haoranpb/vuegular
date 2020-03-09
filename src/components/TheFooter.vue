<template>
  <footer id="site-footer" class="container flex-container">
    <external-link link="https://github.com/ludanxer/vuegular">
      <i class="fab fa-github fa-lg"></i>
    </external-link>

    <external-link
      link="https://github.com/ludanxer/vuegular/blob/master/LICENSE"
      >MIT License | Copyright © 2020 Sun Haoran</external-link
    >
  </footer>
</template>

<script>
import ExternalLink from './ExternalLink.vue'

export default {
  name: 'the-footer',
  components: { ExternalLink },
}
</script>

<style scoped>
#site-footer {
  height: 5rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 2rem;
  background-color: rgb(250, 251, 252);
}
.fa-github {
  color: rgb(150, 157, 164);
}
.external-link {
  color: rgb(88, 96, 105);
}
</style>
