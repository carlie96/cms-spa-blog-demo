<script setup>
import Footer from '@/components/Footer.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const blocks = ref([])

fetch(`${import.meta.env.BASE_URL}/api/home.json`)
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    blocks.value = data.blocks
  })
  .catch(() => {
    router.replace('/not-found')
  })
</script>

<template>
  <BlocksBuilder :blocks></BlocksBuilder>
  <Footer></Footer>
</template>
