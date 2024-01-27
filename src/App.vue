<script setup lang="ts">
import MainDisplay from './components/MainDisplay.vue'
import FlexSection from './components/FlexSection.vue'
import AddBoxes from './components/AddBoxes.vue'
import Export from './components/Export.vue'
</script>

<template>
  <main>
    <MainDisplay />
    <div class="side_menu">
      <AddBoxes />
      <div class="seperate" />
      <FlexSection />
      <div class="seperate" />
      <Export />
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
}
.side_menu{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 16.3vw;
  height: 81.48vh;
  gap: 3.98vh;
  padding: 40px 3px;
  flex-shrink: 0;
  background-color: white;
  border: 4px solid #E31F1F;
  border-radius: 25px;
  box-shadow: 0px 0px 15px 15px rgba(0, 0, 0, 0.25);
}
.seperate {
  height: 3px;
  width: 14.58vw;
  background-color: #2098E3;
}
</style>
