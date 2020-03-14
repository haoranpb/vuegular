<template>
  <div class="subscription-card">
    <div class="card-box top-card" :style="{ backgroundColor: color }">
      <h3 class="card-title">{{ title }}</h3>
      <h4 class="card-price">{{ price.symbol }} {{ price.value }}</h4>
    </div>
    <div class="card-box bottom-card">
      <p class="card-note">{{ note }}</p>
      <p class="card-cycle">Cycle: {{ cycle.number }} {{ cycle.unit }}</p>
      <p class="card-date">First Date: {{ date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'subscription-card',
  props: {
    title: String,
    note: String,
    price: {
      symbol: String,
      value: Number,
    },
    cycle: {
      unit: String,
      number: String,
    },
    date: String,
    color: String,
  },
}
</script>

<style lang="scss" scope>
$card-height: 10rem;
$card-radius: 4px;

.subscription-card {
  display: inline-block;
  margin-bottom: 4%;
  color: black;
  height: $card-height;
  width: 20rem;
  border-radius: $card-radius;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.top-card {
  background-color: $primary-color;
  height: $card-height / 3;
  display: flex;
  justify-content: space-between;
  border-top-left-radius: $card-radius;
  border-top-right-radius: $card-radius;
}
.card-box {
  padding: 5%;
}
.bottom-card {
  padding-top: 3%;
  line-height: 1.5rem;
}
</style>
