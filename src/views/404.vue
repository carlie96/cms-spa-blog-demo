<template>
  <div class="not-found">
    <div class="container">
      <h1>Oops, the page that you were looking for doesn't exist.</h1>
      <button @click="$router.back()">Bring me back</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  display: flex;
  min-height: 100dvh;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 6rem;
}

button {
  padding: 1rem;
  display: block;
  text-decoration: none;
  width: fit-content;
  background-color: rgba(black, 0.8);
  color: white;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
}
</style>
