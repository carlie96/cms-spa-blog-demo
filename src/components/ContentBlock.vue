<script setup>
defineProps({
  content: String,
  containerClass: String,
  containerStyle: String
})
</script>

<template>
  <div class="contentBlock" v-html="content" :class="containerClass" :style="containerStyle"></div>
</template>

<style lang="scss">
img {
  width: 100%;
  object-fit: contain;
}
</style>
