<template>
  <a :href="link" target="_blank" rel="noopener noreferrer">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'external-link',
  props: {
    link: {
      type: String,
      required: true,
      validator: value => /^https?:/.test(value),
    },
  },
}
</script>
