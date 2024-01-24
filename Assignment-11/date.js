
function differenceInDays(date1, date2) {
    const startDate = new Date(date1);
    const endDate = new Date(date2);

    differenceInMilliSecs = startDate - endDate;
    return differenceInMilliSecs / (24 * 60 * 60 * 1000);

}

console.log(differenceInDays('10-13-2023', '12-03-2023'));
