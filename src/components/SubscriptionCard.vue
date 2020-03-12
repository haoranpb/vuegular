<template>
  <div class="subscription-card">
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-note">{{ note }}</p>
    <h4 class="card-price">{{ price.symbol }} {{ price.value }}</h4>
    <p class="card-date">{{ date }}</p>
  </div>
</template>

<script>
export default {
  name: 'subscription-card',
  props: {
    icon: String,
    title: String,
    note: String,
    price: Object,
    cycle: Object,
    date: String,
    color: String,
  },
}
</script>

<style lang="scss" scope>
.subscription-card {
  color: white;
  height: 10rem;
  width: 20rem;
  background-color: $primary-color;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
