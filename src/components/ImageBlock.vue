<script setup>
defineProps({
  src: String,
  alt: String,
  width: {
    type: Number,
    default: 400
  },
  height: {
    type: Number,
    default: 300
  }
})
</script>

<template>
  <img :src :alt :width :height />
</template>
