<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  title: String,
  content: String,
  url: String
})
</script>

<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <div v-html="content"></div>
    <RouterLink :to="url" class="read-more">Read more</RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: #efefef;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
}

.read-more {
  margin-top: 1rem;
  padding: 0.5rem;
  display: block;
  text-decoration: none;
  width: fit-content;
  background-color: rgba(teal, 0.8);
  color: white;
  border-radius: 0.5rem;
  &:hover {
    background-color: teal;
  }
}
</style>
