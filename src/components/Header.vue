<script setup>
import ImportDataButton from "./ImportData.vue";

defineProps({
    title: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <header>
        <div>{{ title }}</div>
        <ImportDataButton />
    </header>
</template>

<style scoped>
header {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: space-between;
    height: 60px;
    width: 100%;
    border-bottom: 1px solid rgba(112 119 144 / 25%);
    padding: 0 30px;
    color: var(--font-color);
}
div {
    padding: 20px 30px;
    font-weight: 500;
    font-size: 15px;
    border-bottom: 2px solid var(--font-color);
}
</style>
