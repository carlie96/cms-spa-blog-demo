<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  title: String,
  content: String,
  url: String,
  readMoreLabel: String
})
</script>

<template>
  <div class="cta">
    <div class="container">
      <h2>{{ title }}</h2>
      <div v-html="content"></div>
      <RouterLink :to="url" class="read-more">{{ readMoreLabel }}</RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cta {
  font-size: 1rem;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
}

.container {
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 300px;
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
