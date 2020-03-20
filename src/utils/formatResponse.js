module.exports = function formatResponse(response) {
    console.log(response);
    const purchases = response.events;
    const formattedData = [];
    let day, mouth, year;
    let dateArray = [];

    purchases.map(purchase => {
        getDateTime(purchase);
    });

    function getDateTime(purchase) {
        const event = purchase.event;

        if (event === 'comprou') {
            const date = new Date(purchase.timestamp);

            /* Manipulação das data das compras */
            let day = date.getDate();
            day = (day < 10 ? "0" : "") + day;

            let month = date.getMonth() + 1;
            month = (month < 10 ? "0" : "") + month;

            const PurchaseDate = (day + '/' + month + '/' + date.getFullYear());
            console.log(PurchaseDate)

            /* Manipulação das horas das compras */
            let hour = date.getHours();
            let minutes = date.getMinutes();
            const PurchaseTime = (hour + ':' + minutes);

            console.log(PurchaseTime)
            
        }
    }


    return response;
}