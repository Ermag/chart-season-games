<script setup>
import { CONFIG } from "../config";
import { useMatchesStore } from "../store/matches";
import i18n from "../plugins/i18n";
import { csvToJSON } from "../helpers";
import Button from "./Button.vue";

const matchesStore = useMatchesStore();

function validateData(fields = []) {
    const missingCols = [];

    CONFIG.dataFields.forEach((field, i) => {
        const fieldIndex = fields.indexOf(field.label, i);
        if (fieldIndex === -1 || fieldIndex !== field.index)
            missingCols.push(field.label);
    });

    return missingCols;
}

function processData(dataString) {
    const data = csvToJSON(dataString);
    // Sanity check of the CSV columns
    const missingFields = validateData(data.cols);
    if (missingFields.length > 0) {
        matchesStore.hasImportError = true;
        matchesStore.importMissingFields = missingFields;
    } else {
        matchesStore.$patch((state) => {
            state.hasImportError = false;
            state.matches = data.rows;
        });
    }
}

function promptForCSVData() {
    const dataString = window.prompt(i18n.global.t("csvImportMsg"));
    if (dataString !== null) processData(dataString);
}
</script>

<template>
    <Button :label="$t('importData')" @click="promptForCSVData"></Button>
</template>
