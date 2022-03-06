export const CONFIG = Object.freeze({
    appTitle: "NBA Season Explorer",
    defaultLanguage: "en",
    // Map the data imported => app data layer
    dataFields: [
        // TODO: Validation perhaps?
        { name: "date", label: "Date", index: 0 },
        { name: "startTime", label: "Start (ET)", index: 1 },
        { name: "teamVisitor", label: "Visitor/Neutral", index: 2 },
        { name: "teamVisitorPts", label: "PTS", index: 3 },
        { name: "teamHome", label: "Home/Neutral", index: 4 },
        { name: "teamHomePts", label: "PTS", index: 5 },
    ],
    settings: ["Home", "Away"],
    chartDefaultOptions: {
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
    },
});
