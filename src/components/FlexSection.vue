<script setup lang="ts">
  import FlexDirection from './FlexOptions/FlexDirection.vue';
  import FlexWrap from './FlexOptions/FlexWrap.vue';
  import AlignContent from './FlexOptions/AlignContent.vue';
  import JustifyContent from './FlexOptions/JustifyContent.vue';
  import AlignItems from './FlexOptions/AlignItems.vue';
  import { store } from '../store.js'
</script>

<template>
  <div class="display_container">
    <div class="choice_buttons" v-if="store.visibleSection === 'choiceSection'">
      <button @click="store.setVisibleSection('flexDirection')">Flex direction: {{ store.flexDirectionPicked }}</button>
      <button @click="store.setVisibleSection('flexWrap')">Flex wrap: {{ store.flexWrapPicked}}</button>
      <button @click="store.setVisibleSection('alignContent')">Align content: {{ store.alignContentPicked}}</button>
      <button @click="store.setVisibleSection('justifyContent')">Justify content: {{ store.justifyContentPicked}}</button>
      <button @click="store.setVisibleSection('alignItems')">Align items: {{ store.alignItemsPicked}}</button>
    </div>
    <FlexDirection v-if="store.visibleSection === 'flexDirection'" />
    <FlexWrap v-if="store.visibleSection === 'flexWrap'" />
    <AlignContent v-if="store.visibleSection === 'alignContent'" />
    <JustifyContent v-if="store.visibleSection === 'justifyContent'" />
    <AlignItems v-if="store.visibleSection === 'alignItems'" />
  </div>
</template>

<style scoped>
  .display_container {
    width: 14.58vw;
  }
  .choice_buttons {
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
    font-size: 1.30vw;
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
    .display_container {
      width: 90%;
    }
    .choice_buttons {
      gap: 5vh;
    }
    button {
      font-size: 2em;
    }
  }
</style>
