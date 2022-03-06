<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { CONFIG } from "../config";
import { useMatchesStore } from "../store/matches";
import { dateToTimestamp } from "../helpers/dateToTimestamp";
import SeasonExplorerControls from "./SeasonExplorerControls.vue";
import Panel from "./Panel.vue";

const fieldDate = CONFIG.dataFields.find((field) => field.name === "date");
const fieldStartTime = CONFIG.dataFields.find(
    (field) => field.name === "startTime"
);
const fieldTeamVisitor = CONFIG.dataFields.find(
    (field) => field.name === "teamVisitor"
);
const fieldTeamVisitorPts = CONFIG.dataFields.find(
    (field) => field.name === "teamVisitorPts"
);
const fieldTeamHome = CONFIG.dataFields.find(
    (field) => field.name === "teamHome"
);
const fieldTeamHomePts = CONFIG.dataFields.find(
    (field) => field.name === "teamHomePts"
);
const store = useMatchesStore();
const { teamMatches, selectedTeams, selectedSettings } = storeToRefs(store);
let chartData = ref([]);

function buildChartData(selectedTeams, selectedSettings, teamMatches) {
    const data = [];

    // Construct the chart data structure
    selectedTeams.forEach((teamName) => {
        data.push({
            name: teamName,
            data: [],
        });
    });
    teamMatches.forEach((match) => {
        const teams = [];
        const timestamp = dateToTimestamp(
            `${match[fieldDate.index]} ${match[fieldStartTime.index]}`
        );

        // Look only for teams withing the settings
        if (selectedSettings.indexOf("Home") !== -1) {
            teams.push({
                indexName: fieldTeamHome.index,
                indexScore: fieldTeamHomePts.index,
            });
        }
        if (selectedSettings.indexOf("Away") !== -1) {
            teams.push({
                indexName: fieldTeamVisitor.index,
                indexScore: fieldTeamVisitorPts.index,
            });
        }

        teams.forEach((teamEntry) => {
            const dataEntry = data.find(
                (team) => team.name === match[teamEntry.indexName]
            );
            if (dataEntry) {
                dataEntry.data.push({
                    x: timestamp,
                    y: parseInt(match[teamEntry.indexScore]),
                });
            }
        });
    });

    // Sort by timestamps
    data.forEach((entry) => {
        entry.data.sort((a, b) => a.x - b.x);
    });

    return data;
}

chartData.value = buildChartData(
    selectedTeams.value,
    selectedSettings.value,
    teamMatches.value
);

store.$subscribe(() => {
    chartData.value = buildChartData(
        selectedTeams.value,
        selectedSettings.value,
        teamMatches.value
    );
});

const chartOptions = ref({
    chart: {
        id: "matches",
        fontFamily: "Poppins, sans-serif",
        foreColor: "#F9FAFB",
        stacked: false,
        toolbar: {
            show: false,
        },
    },
    stroke: {
        curve: "smooth",
    },
    tooltip: {
        shared: true,
        x: {
            show: false,
            format: "dd MMM HH:mm",
        },
    },
    xaxis: {
        type: "datetime",
    },
    legend: {
        position: "top",
        horizontalAlign: "right",
        offsetX: -10,
    },
});
</script>

<template>
    <SeasonExplorerControls></SeasonExplorerControls>
    <Panel>
        <apexchart
            width="100%"
            height="500px"
            type="line"
            :options="chartOptions"
            :series="chartData"
        />
    </Panel>
</template>
