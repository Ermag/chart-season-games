export function csvToJSON(dataString) {
    dataString = dataString || "";
    const result = {
        cols: [],
        rows: [],
    };
    const lines = dataString.split("\n");

    lines.forEach((line, i) => {
        // Assign the first line to the columns
        if (i === 0) result.cols = line.split(",");
        else result.rows.push(line.split(","));
    });

    return result;
}
