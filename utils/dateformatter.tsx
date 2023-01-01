import moment from "moment";

// Current date in specific format
export const CurrentDateFormat = () => {
    var currentDate = moment()
    .utcOffset('+05:30')
    .format('YYYY-MM-DD hh:mm:ss A');

    return currentDate.toString();
}