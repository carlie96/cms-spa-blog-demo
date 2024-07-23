<script setup>
defineProps({
  blocks: Array
})
</script>

<template>
  <component v-for="(block, i) in blocks" :key="i" :is="block.type" v-bind="block.data"></component>
</template>
