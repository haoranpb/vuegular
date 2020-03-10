<template>
  <div class="subscription-card">
    <h3 class="card-title">Title</h3>
    <p class="card-note">This is some notes</p>
    <h4 class="card-price">$100 / month</h4>
    <p class="card-date">Due Date</p>
  </div>
</template>

<script>
export default {
  name: 'subscription-card',
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
