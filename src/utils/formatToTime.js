module.exports = function formatToTime(timestamp) {
    const date = new Date(timestamp);
    let hour = date.getHours();
    let minutes = date.getMinutes();

    return hour + ':' + minutes;
}