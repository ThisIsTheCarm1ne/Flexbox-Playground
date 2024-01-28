<script setup lang="ts">
  import { ref } from 'vue';
  import { store } from '../store.js';

  let openExportModal = ref(false);
  let exportRef = ref("");

  const copyExport = () => {
    const contentToCopy = exportRef.value.innerText;
    const textarea = document.createElement('textarea');
    textarea.value = contentToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
</script>

<template>
  <div class="display_container">
    <button @click="openExportModal = true">Export</button>
  </div>
  <div 
    class="modal"
    v-if="openExportModal"
  >
    <div class="dialog">
      <div class="buttons">
        <button @click="openExportModal = false">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        <button @click="copyExport()">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
          </svg>
        </button>
      </div>
      <div ref="exportRef" class="export">
        <span>
          display: flex;
        </span>
        <span>
          flex-direction: {{ store.flexDirectionPicked }};
        </span>
        <span>
          flex-wrap: {{ store.flexWrapPicked }};
        </span>
        <span>
          align-content: {{ store.alignContentPicked }};
        </span>
        <span>
          justify-content: {{ store.justifyContentPicked }};
        </span>
        <span>
          align-items: {{ store.alignItemsPicked }};
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .display_container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 2.31vh;
  }
  button {
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
  }
  .modal {
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.15);
  }
  .dialog {
    width: 50%;
    height: 50%;
    padding: 1em;
    background-color: white;
    border: 4px solid #E31F1F;
    border-radius: 25px;
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.25);
  }
  .buttons {
    display: flex;
    margin-bottom: 2vw;
  }
  .buttons button {
    height: 4vh;
    width: 100%;
  }
  svg {
    height: 100%;
    width: auto;
  }
  .export {
    display: flex;
    flex-direction: column;
    gap: 0.5vw;
    font-size: 1.5rem;
  }
</style>
