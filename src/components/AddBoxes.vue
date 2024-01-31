<script setup lang="ts">
  import { store } from '../store.js'
</script>

<template>
  <div class="display_container">
    <button @click="store.decrement()" :disabled="store.boxAmount === 0">-</button>
    <p>{{ store.boxAmount }}</p>
    <button @click="store.increment()" :disabled="store.boxAmount === 32">+</button>
  </div>
</template>

<style scoped>
  .display_container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
  }
  p {
    font-size: 4vw;
    text-align: center;
  }
  button {
    background: #E31F1F;
    font-size: 2vw;
    margin: auto;
    border-radius: 100%;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
    color: white;
    width: 2.86vw;
    height: 2.86vw;
  }
  @media only screen and (max-width: 720px) {
    p {
      font-size: 20vw;
    }
    button {
      width: 10vw;
      height: 10vw;
      font-size: 6vw;
    }
  }
</style>
