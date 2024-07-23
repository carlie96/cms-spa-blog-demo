<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

const route = useRoute()
const id = route.params.id
const router = useRouter()

const title = ref('')
const collection = ref('')
const collectionLabel = ref('')
const blocks = ref([])

fetch(`${import.meta.env.BASE_URL}/api/posts/${id}.json`)
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    blocks.value = data.blocks
    title.value = data.title
    collection.value = data.collection
    collectionLabel.value = data.collectionLabel
  })
  .catch(() => {
    router.replace('/not-found')
  })
</script>

<template>
  <div class="breadcrumb">
    <div class="container">
      <RouterLink to="/">Home</RouterLink> /
      <RouterLink :to="collection">{{ collectionLabel }}</RouterLink> /
      <RouterLink :to="`/posts/${id}`">{{ title }}</RouterLink>
    </div>
  </div>
  <BlocksBuilder :blocks></BlocksBuilder>
  <Footer></Footer>
</template>

<style lang="scss" scoped>
.not-found {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 6rem;
  }

  a {
    padding: 1rem;
    display: block;
    text-decoration: none;
    width: fit-content;
    background-color: rgba(black, 0.8);
    color: white;
    border-radius: 0.5rem;
    &:hover {
      background-color: black;
    }
  }
}
</style>
