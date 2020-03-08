<template>
  <footer>
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
footer {
  height: 5rem;
  width: 100%;
  padding: 1.5rem 8rem;
  font-size: 1rem;
  line-height: 2rem;
  display: flex;
  justify-content: space-between;
  background-color: rgb(250, 251, 252);
}
.fa-github {
  color: rgb(150, 157, 164);
}
</style>
