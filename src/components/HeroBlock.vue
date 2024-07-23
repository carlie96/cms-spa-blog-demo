<script setup>
defineProps({
  title: String,
  backgroundImage: String,
  content: String,
  fullscreen: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div
    class="hero"
    :style="{
      height: fullscreen ? '100dvh' : ''
    }"
  >
    <div
      class="background"
      :style="{
        backgroundImage: `url(${backgroundImage})`
      }"
    ></div>
    <div class="container">
      <div class="content">
        <h1>{{ title }}</h1>
        <div v-html="content"></div>
      </div>

      <div class="scroll" v-if="fullscreen">
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24">
          <path
            fill="#fff"
            d="M2 2h2v20H2zm9 18h2v-2h2v-2h2v-2h-2v2h-2V8h2v2h2V8h-2V6h-2V4h-2v2H9v2H7v2h2V8h2v8H9v-2H7v2h2v2h2zM22 2h-2v20h2z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  width: 100%;
  min-height: 320px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.background {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: brightness(20%);
  z-index: 0;
  background-color: #222;
}

.content {
  position: relative;
  z-index: 1;
  color: #fff;
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1rem;
  }
}

.scroll {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}
</style>
