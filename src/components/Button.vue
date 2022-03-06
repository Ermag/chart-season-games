<script setup>
defineProps({
    color: {
        type: String,
        default: "#000",
    },
    label: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <button :style="{ backgroundColor: color }">{{ label }}</button>
</template>

<style scoped>
button {
    padding: 8px 24px;
    border: none;
    border-radius: 20px;
    font-size: 15px;
    color: var(--font-color);
    cursor: pointer;
    border: 1px solid transparent;
}
button:hover {
    border-color: var(--font-color);
}
</style>
