<template>
  <footer id="site-footer" class="flex-container">
    <external-link link="https://github.com/ludanxer/vuegular" class="icons">
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

<style lang="scss" scoped>
@import '../styles/_mixins.scss';

#site-footer {
  @include vertical-align($footer-height);
  font-size: 1rem;
  background-color: rgb(250, 251, 252);
}
.fa-github {
  color: rgb(150, 157, 164);
}
.external-link {
  color: rgb(88, 96, 105);
}

@media screen and (max-width: $breakpoint-mobile) {
  .icons {
    display: none;
  }
}
</style>
