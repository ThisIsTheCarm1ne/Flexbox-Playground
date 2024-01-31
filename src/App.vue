<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue';

  import { store } from './store.js';

  import MainDisplay from './components/MainDisplay.vue'
  import FlexSection from './components/FlexSection.vue'
  import AddBoxes from './components/AddBoxes.vue'
  import Export from './components/Export.vue'

  let isMobile = ref<boolean>(window.innerWidth <= 720);
  let openSideMenuMobile = ref<boolean>(false);
</script>

<template>
  <main>
    <MainDisplay />
    <button v-if="isMobile" @click="openSideMenuMobile = true" class="side_menu_btn">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
    <div v-if="isMobile === false || openSideMenuMobile" class="side_menu">
      <button v-if="isMobile" @click="openSideMenuMobile = false, store.setExportMobileOpen(false)" class="side_menu_btn_exit">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
      <AddBoxes v-if="!store.exportMobileOpen" />
      <div class="seperate" v-if="!store.exportMobileOpen"/>
      <FlexSection v-if="!store.exportMobileOpen"/>
      <div class="seperate" v-if="!store.exportMobileOpen"/>
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
.side_menu_btn,
.side_menu_btn_exit {
  position: absolute;
  background: #E31F1F;
  margin: auto;
  padding: 1em;
  border-radius: 100%;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
  color: white;
  width: 10vw;
  height: 10vw;
}
.side_menu_btn {
  top: 3%;
  right: 10%;
}
.side_menu_btn_exit {
  top: 3%;
  right: 10%;
}
@media only screen and (max-width: 720px) {
  main {
    flex-direction: column-reverse;
  }
  .side_menu {
    width: 90vw;
    height: 90%;
    position: absolute;
    right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0;
    padding-top: 20%;
    padding-bottom: 10px;
  }
  .seperate {
    width: 90%;
  }
}
</style>
