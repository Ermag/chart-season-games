<script setup>
defineProps({
    title: {
        type: String,
    },
});
</script>

<template>
    <section>
        <slot></slot>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: var(--background-panel);
    border-radius: 15px;
    border: 1px solid var(--background-content);
    padding: 20px;
}
</style>
