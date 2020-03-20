module.exports = function formatResponse(response) {
    const purchases = response.events;
    let responseFormated = [];

    purchases.map(purchase => {
        fillPurchaseObject(purchase);
    });

    purchases.map(purchase => {
        fillPurchaseProductObject(purchase)
    });

    function fillPurchaseObject(purchase) {
        let purchaseObject = new Object();

        const purchaseEvent = purchase.event;

        if (purchaseEvent === 'comprou') {
            purchaseObject.timestamp = purchase.timestamp;

            /* Add shop name to purchaseObject */
            purchase.custom_data.map(shop =>{
                if (shop.key === 'store_name')
                    purchaseObject.shop_name = shop.value;
                else {
                    purchaseObject.transaction_id = shop.value;
                }
            })
            purchaseObject.total = purchase.revenue;
            purchaseObject.products = new Array()

            responseFormated.push(purchaseObject);
        }
        return purchaseObject;
    }

    function fillPurchaseProductObject(purchase) {
        let purchaseProductObject = new Object();

        const purchaseEvent = purchase.event;

        if (purchaseEvent === 'comprou-produto') {
            purchase.custom_data.map(purchase => {
                if (purchase.key === 'product_name')
                    purchaseProductObject.name = purchase.value;
                if (purchase.key === 'transaction_id')
                    purchaseProductObject.transaction_id = purchase.value;
                if (purchase.key === 'product_price')
                    purchaseProductObject.value = purchase.value;
            })

            responseFormated.map(purchaseResponseFormated => {
                let purchaseTransaction = purchaseResponseFormated.transaction_id;
                let purchaseProductTransaction;
                
                purchase.custom_data.map(purchase => {
                    if (purchase.key === 'transaction_id')
                    purchaseProductTransaction = purchase.value;
                })

                if (purchaseTransaction == purchaseProductTransaction) {
                    purchaseResponseFormated.products.push(purchaseProductObject);
                }
            })
        }
    }
    return responseFormated;
}