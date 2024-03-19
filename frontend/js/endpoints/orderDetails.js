export const ordersDetails = (api, data, type, container) => {
    const ordersDetailsHTML = data.map(orderDetail =>
        `<div class="content-data medium">
            <div class="box">
                <h2 class="title"> Order Detail </h2>
                <div class="info">
                    <span><strong>Order ID: </strong>${orderDetail.orderCode}</span>
                    <span><strong>Product ID: </strong> ${orderDetail.productCode}</span>
                    <span><strong>Amount: </strong> ${orderDetail.amount}</span>
                    <span><strong>Unit price: </strong> ${orderDetail.unitPrice}</span>
                    <span><strong>Number Line: </strong> ${orderDetail.numberLine}</span>
                </div>
            </div>
        </div>`
    ).join("");
    
    container.innerHTML = ordersDetailsHTML;
}

export const ordersDetailsQuery1 = (api, data, type, container) => {
    const ordersDetailsHTML = data.map(orderDetail =>
        `<div class="content-data medium">
            <div class="box">
                <h2 class="title"> Order Detail </h2>
                <div class="info">
                    <span><strong>Base Imponible: </strong>${orderDetail.baseImponible}</span>
                    <span><strong>IVA: </strong> ${orderDetail.iva}</span>
                    <span><strong>Total Renueve: </strong> ${orderDetail.totalRevenue}</span>
                </div>
            </div>
        </div>`
    ).join("");
    
    container.innerHTML = ordersDetailsHTML;
}

export const ordersDetailsQuery2 = (api, data, type, container) => {
    const ordersDetailsHTML = data.map(orderDetail =>
        `<div class="content-data medium">
            <div class="box">
                <h2 class="title"> Order Detail </h2>
                <div class="info">
                    <span><strong>Base Imponible: </strong>${orderDetail.baseImponible}</span>
                    <span><strong>IVA: </strong> ${orderDetail.iva}</span>
                    <span><strong>Total Renueve: </strong> ${orderDetail.totalRevenue}</span>
                </div>
            </div>
        </div>`
    ).join("");
    
    container.innerHTML = ordersDetailsHTML;
}

export const ordersDetailsQuery3 = (api, data, type, container) => {
    const ordersDetailsHTML = data.map(orderDetail =>
        `<div class="content-data medium">
            <div class="box">
                <h2 class="title"> Order Detail </h2>
                <div class="info">
                    <span><strong>Base Imponible: </strong>${orderDetail.baseImponible}</span>
                    <span><strong>IVA: </strong> ${orderDetail.iva}</span>
                    <span><strong>Total Renueve: </strong> ${orderDetail.totalRevenue}</span>
                </div>
            </div>
        </div>`
    ).join("");
    
    container.innerHTML = ordersDetailsHTML;
}

export const ordersDetailsQuery4 = (api, data, type, container) => {
    const ordersDetailsHTML = data.map(orderDetail =>
        `<div class="content-data medium">
            <div class="box">
                <h2 class="title"> Order Detail </h2>
                <div class="info">
                    <span><strong>Unit Sold: </strong>${orderDetail.unitsSold}</span>
                    <span><strong>Total Renueve: </strong> ${orderDetail.totalRevenue}</span>
                    <span><strong>Total With IVA </strong> ${orderDetail.totalWithIVA}</span>
                </div>
            </div>
        </div>`
    ).join("");
    
    container.innerHTML = ordersDetailsHTML;
}

export const ordersDetailsQuery5 = (api, data, type, container) => {
    const ordersDetailsHTML = data.map(orderDetail =>
        `<div class="content-data medium">
            <div class="box">
                <h2 class="title"> Order Detail </h2>
                <div class="info">
                    <span><strong>Order ID: </strong>${orderDetail.orderCode}</span>
                    <span><strong>Count: </strong> ${orderDetail.count}</span>
                </div>
            </div>
        </div>`
    ).join("");
    
    container.innerHTML = ordersDetailsHTML;
}

export const ordersDetailsQuery6 = (api, data, type, container) => {
    const ordersDetailsHTML = data.map(orderDetail =>
        `<div class="content-data medium">
            <div class="box">
                <h2 class="title"> Order Detail </h2>
                <div class="info">
                    <span><strong>Order ID: </strong>${orderDetail.orderCode}</span>
                    <span><strong>Amount: </strong> ${orderDetail.amount}</span>
                </div>
            </div>
        </div>`
    ).join("");
    
    container.innerHTML = ordersDetailsHTML;
}