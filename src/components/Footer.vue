<template>
  <footer>
    <div class="container">
      <div>Websparks © 2024</div>
      <div>Vue.js Training Demo Application</div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
footer {
  background-color: teal;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  .container {
    display: flex;
    justify-content: space-between;
  }
}
</style>
