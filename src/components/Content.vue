<script setup>
import Dashboard from "../components/Dashboard.vue";
import MessageItem from "./MessageItem.vue";
import DataIcon from "./icons/IconData.vue";
</script>

<template>
    <main>
        <MessageItem>
            <template #icon>
                <DataIcon />
            </template>

            {{ $t("noDataMsg") }}
        </MessageItem>

        <Dashboard />
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    padding: 25px 50px;
    height: 100%;
    overflow: auto;
    background-color: var(--background-content);
}
</style>
