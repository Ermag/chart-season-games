<script setup>
import { storeToRefs } from "pinia";
import { useMatchesStore } from "../store/matches";
import SeasonExplorerChart from "../components/SeasonExplorerChart.vue";
import MessageItem from "./MessageItem.vue";
import DataIcon from "./icons/IconData.vue";

const store = useMatchesStore();
const { matches, hasImportError, importMissingFields } = storeToRefs(store);
</script>

<template>
    <main>
        <MessageItem v-if="!matches.length || hasImportError">
            <template #icon>
                <DataIcon />
            </template>
            {{
                hasImportError
                    ? $t("missingDataFields", [importMissingFields.join(", ")])
                    : $t("noDataMsg")
            }}
        </MessageItem>

        <SeasonExplorerChart v-else />
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
