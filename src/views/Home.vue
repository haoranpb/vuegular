<template>
  <div id="home">
    <h1>This is home page</h1>
    <subscription-card
      v-for="item in subscriptions"
      :key="item.id"
      :icon="item.icon"
      :title="item.title"
      :note="item.note"
      :price="item.price"
      :cycle="item.cycle"
      :date="item.date"
      :color="item.color"
    ></subscription-card>
  </div>
</template>

<script>
import SubscriptionCard from '../components/SubscriptionCard.vue'

export default {
  name: 'home',
  components: { SubscriptionCard },
  computed: {
    subscriptions() {
      return this.$store.state.subscriptionList
    },
  },
}
</script>
