<template>
  <div class="container">
    <div class="listing">
      <component v-for="(item, i) in items" :key="i" :is="item.type" v-bind="item.data"></component>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: Array
})
</script>

<style lang="scss" scoped>
.listing {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
</style>
