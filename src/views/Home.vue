<template>
  <div id="home">
    <h1>This is home page</h1>
    <subscription-card></subscription-card>
  </div>
</template>

<script>
import SubscriptionCard from '../components/SubscriptionCard.vue'

export default {
  name: 'home',
  components: { SubscriptionCard },
}
</script>
