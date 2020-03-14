<template>
  <div id="home">
    <subscription-card
      v-for="item in subscriptions"
      :key="item.id"
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

<style lang="scss" scoped>
#home {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow: scroll;
}
</style>
