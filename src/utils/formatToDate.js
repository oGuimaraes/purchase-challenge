module.exports = function formatToDate(timestamp) {
    const date = new Date(timestamp);

    let day = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    let month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    return day + '/' + month + '/' + date.getFullYear();
}