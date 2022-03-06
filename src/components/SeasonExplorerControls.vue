<script setup>
// import { ref } from "vue";
import VueMultiselect from "vue-multiselect";
import { storeToRefs } from "pinia";
import { CONFIG } from "../config";
import { useMatchesStore } from "../store/matches";

const store = useMatchesStore();
const { selectedTeams, teamsList, selectedSettings } = storeToRefs(store);
</script>

<template>
    <div class="controls-wrapper">
        <div class="select-wrapper">
            <div class="title">{{ $t("teams") }}:</div>
            <VueMultiselect
                class="select"
                v-model="selectedTeams"
                :options="teamsList"
                :limit="2"
                :multiple="true"
                :placeholder="$t('selectTeams')"
            ></VueMultiselect>
        </div>
        <div class="select-wrapper">
            <div class="title">{{ $t("setting") }}:</div>
            <VueMultiselect
                class="select"
                v-model="selectedSettings"
                :options="[...CONFIG.settings]"
                :limit="2"
                :multiple="true"
                :placeholder="$t('selectSetting')"
            ></VueMultiselect>
        </div>
    </div>
</template>

<style>
.controls-wrapper {
    display: flex;
    justify-content: space-between;
}
.select-wrapper {
    width: 48%;
    height: 100px;
}
.select-wrapper .multiselect {
    color: var(--font-color);
}
.select-wrapper .multiselect__content-wrapper,
.select-wrapper .multiselect__tags {
    background-color: var(--background-panel);
    border: 1px solid var(--background-content);
}
.select-wrapper .multiselect__tags {
    border-radius: 15px;
}
.select-wrapper .multiselect__input {
    background: none;
    color: var(--font-color);
}
.select-wrapper .multiselect__tag {
    background: #000;
}

.select-wrapper .multiselect__tag-icon:after,
.select-wrapper .multiselect__strong {
    color: var(--font-color);
}
.select-wrapper .multiselect__option--highlight {
    background: rgba(0 0 0 / 75%);
}
.select-wrapper .multiselect__option--selected {
    background: rgba(243 243 243 / 75%);
}
.select-wrapper .multiselect__option--selected.multiselect__option--highlight {
    background: rgba(255 106 106 / 75%);
}
.multiselect__option {
    background: rgba(0 0 0 / 60%);
}
.select-wrapper .multiselect__option::after {
    display: none;
}
.title {
    color: #999ba5;
    font-size: 16px;
    margin-bottom: 5px;
}
</style>
