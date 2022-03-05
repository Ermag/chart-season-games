<script setup>
import { ref, onMounted } from "vue";
import { CONFIG } from "./config";
import AppHeader from "./components/Header.vue";
import AppContent from "./components/Content.vue";

const appTitle = ref(CONFIG.appTitle);

onMounted(() => {
    document.title = appTitle.value;
});
</script>

<template>
    <app-header :title="appTitle"></app-header>
    <app-content></app-content>
</template>

<style>
@import "./assets/base.css";

#app {
    background-color: var(--background-content);
    display: flex;
    width: 100%;
    max-width: 1280px;
    height: 100%;
    flex-direction: column;
    overflow: hidden;
    border-radius: 15px;
    backdrop-filter: blur(20px);
    font-size: 15px;
    font-weight: 500;
}
</style>
