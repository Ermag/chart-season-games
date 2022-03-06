import moment from "moment";

export function dateToTimestamp(dateString, format = "MM/DD/YY hh:mm:ss A") {
    const timestamp = moment(dateString, format).unix(); // in seconds
    return timestamp * 1000;
}
