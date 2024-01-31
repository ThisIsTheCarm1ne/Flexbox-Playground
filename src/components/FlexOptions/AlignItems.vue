<script setup lang="ts">
  import { store } from '../../store.js'
</script>

<template>
  <div class="options">
    <button @click="store.resetVisibleSection()">Exit</button>
    <button @click="store.setAlignItems('center')">center</button>
    <button @click="store.setAlignItems('flex-start')">flex-start</button>
    <button @click="store.setAlignItems('flex-end')">flex-end</button>
    <button @click="store.setAlignItems('stretch')">stretch</button>
    <button @click="store.setAlignItems('baseline')">baseline</button>
    <button @click="store.setAlignItems('normal')">normal</button>
  </div>
</template>

<style scoped>
  .options {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 2.31vh;
  }
  button {
    background: none;
    border: none;
    font-size: 1.3vw;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    transition-duration: 50ms;
  }
  button:hover {
    background: #E31F1F;
    color: white;
  }
  @media only screen and (max-width: 720px) {
    button {
      font-size: 5vw;
    }
  }
</style>
