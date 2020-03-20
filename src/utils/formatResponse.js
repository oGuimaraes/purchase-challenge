module.exports = function formatResponse(response) {
    const purchases = response.events;
    var responseFormated = [];
    var products = {}; 

    purchases.map(purchase => {
        fillPurchaseObject(purchase);
        //console.log(responseFormated);
    });

    function fillPurchaseObject(purchase) {
        let purchaseObject = new Object();
        //console.log(purchase)
        //console.log(purchases)
        const event = purchase.event;

        if (event === 'comprou') {
            console.log(purchase)
            purchaseObject.timestamp = purchase.timestamp;

            /* Add shop name to purchaseObject */
            purchase.custom_data.map(shop =>{
                if (shop.key === 'store_name') {
                    purchaseObject.shop_name = shop.value;
                } else {
                    purchaseObject.transaction_id = shop.value;
                }
            })
            purchaseObject.total = purchase.revenue;
            responseFormated.push(purchaseObject);

            /* Add comprou_produtos to purchase in purchaseObject */
        } else if ( event === 'comprou-produto') {
            //console.log (purchase)


        }

        return purchaseObject;
        
    }

    console.log(responseFormated)
    return responseFormated;
}