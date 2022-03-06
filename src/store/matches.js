import { defineStore } from "pinia";
import { CONFIG } from "../config";
const fieldVisitor = CONFIG.dataFields.find(
    (field) => field.name === "teamVisitor"
);
const fieldHome = CONFIG.dataFields.find((field) => field.name === "teamHome");

export const useMatchesStore = defineStore("matches", {
    state: () => ({
        matches: [],
        selectedSettings: [...CONFIG.settings],
        selectedTeams: ["Houston Rockets", "Miami Heat", "New York Knicks"],
        hasImportError: false,
        importMissingFields: [],
    }),
    getters: {
        teamMatches(state) {
            // Filter by selected teams
            return state.matches.filter(
                (match) =>
                    state.selectedTeams.indexOf(match[fieldVisitor.index]) !==
                        -1 ||
                    state.selectedTeams.indexOf(match[fieldHome.index]) !== -1
            );
        },
        teamsList(state) {
            const list = state.matches.flatMap((match) => {
                return [match[fieldVisitor.index], match[fieldHome.index]];
            });

            return [...new Set(list)];
        },
    },
});
