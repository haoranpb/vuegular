<template>
  <div id="about">
    <h3>What is Vuegular?</h3>
    <p>
      Usually, I love using
      <external-link link="https://cli.vuejs.org/"> vue-cli</external-link> to
      quickly start a project 🚀 and focus on the website I want to build, it's
      an amazing tool so I don't have to worry about staffs like webpack.
      However, things have changed for me, now I want to dig a little deeper
      into frontend development and try to better understand all those utilities
      🧐.
    </p>
    <p>
      So here at Vuegular, I'll try to build a simple web application with Vuejs
      <b>from scratch</b>. And I hope I could finish this and benefit from it.
      If you are interested in how I build Vuegular step by step, check out the
      <external-link link="https://github.com/ludanxer/vuegular/commits/master"
        >commit history</external-link
      >!
    </p>
  </div>
</template>

<script>
import ExternalLink from '../components/ExternalLink.vue'

export default {
  name: 'about',
  components: { ExternalLink },
}
</script>

<style lang="scss" scoped>
#about {
  font-size: 1.2rem;
  line-height: 1.6rem;
  p {
    margin-top: 3%;
  }
  .external-link {
    color: $primary-color;
    font-weight: 500;
  }
}

@media screen and (max-width: $breakpoint-mobile) {
  #about {
    margin-top: 3%;
    p {
      margin-top: 6%;
    }
  }
}
</style>
