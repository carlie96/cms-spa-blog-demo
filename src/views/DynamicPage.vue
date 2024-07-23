<script setup>
import Footer from '@/components/Footer.vue'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const slug = route.params.slug

if (!slug) {
  router.replace('/not-found')
}

const blocks = ref([])
const title = ref('')

fetch(`${import.meta.env.BASE_URL}/api/${slug}.json`)
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    blocks.value = data.blocks
    title.value = data.title
  })
  .catch(() => {
    router.push('/not-found')
  })
</script>

<template>
  <div class="breadcrumb">
    <div class="container">
      <RouterLink to="/">Home</RouterLink> /
      <RouterLink :to="`/${slug}`">{{ title }}</RouterLink>
    </div>
  </div>
  <BlocksBuilder :blocks></BlocksBuilder>
  <Footer></Footer>
</template>
