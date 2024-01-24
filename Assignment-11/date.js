import moment from "moment";

function differenceInDays(date1, date2) {
    const startDate = new Date(date1);
    const endDate = new Date(date2);

    const differenceInMilliSecs = startDate - endDate;
    return differenceInMilliSecs / (24 * 60 * 60 * 1000);

}

console.log(differenceInDays('10-13-2023', '12-03-2023'));

//using moment

// console.log(moment().dayOfYear());

// function differenceUsingMoment(date1, date2) {

//     return moment(date1).diff(moment(date2), 'days');

// }

