<script setup lang="ts">
  import { store } from '../store.js'
</script>

<template>
  <div class="display_container">
    <div 
      class="box"
      v-for="number in store.boxAmount"
    >
    </div>
  </div>
</template>

<style scoped>
  .display_container {
    width: 71.61vw;
    height: 81.48vh;
    background-color: white;
    border: 4px solid #E31F1F;
    border-radius: 25px;
    box-shadow: 0px 0px 15px 15px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: v-bind("store.flexDirectionPicked");
    flex-wrap: v-bind("store.flexWrapPicked");
    align-content: v-bind("store.alignContentPicked");
    justify-content: v-bind("store.justifyContentPicked");
    align-items: v-bind("store.alignItemsPicked");
    gap: 1em;
    padding: 25px;
  }
  .box {
    width: 20%;
    height: 10%;
    background-color: #2098E3;
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.25);
  }
</style>
