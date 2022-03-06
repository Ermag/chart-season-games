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
});
