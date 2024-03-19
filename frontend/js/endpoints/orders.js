export const orders = (api, data, type, container) => {
    const orderHTML = data.map(order =>
        `<div class="content-data medium">
            <div class="box">
                <h2 class="title"> Order ${order.orderCode}</h2>
                <div class="info">
                    <span><strong>Order Date: </strong>${order.orderDate}</span>
                    <span><strong>Expected Date: </strong> ${order.expectedDate}</span>
                    <span><strong>Deliver Date: </strong> ${order.deliverDate}</span>
                    <span><strong>Status: </strong> ${order.status}</span>
                    <span><strong>Comments: </strong> ${order.comments}</span>
                    <span><strong>Customer: </strong> ${order.customerId}</span>
                </div>
            </div>
        </div>`
    ).join("");
    
    container.innerHTML = orderHTML;
}

export const ordersQuery1 = (api, data, type, container) => {
    const orderHTML = data.map(order =>
        `<div class="content-data medium">
            <div class="box">
                <h2 class="title"> Order ${order.orderCode}</h2>
                <div class="info">
                    <span><strong>Order Date: </strong>${order.customerCode}</span>
                    <span><strong>Expected Date: </strong> ${order.expectedDate}</span>
                    <span><strong>Deliver Date: </strong> ${order.deliverDate}</span>
                </div>
            </div>
        </div>`
    ).join("");
    
    container.innerHTML = orderHTML;
}

export const ordersQuery2 = (api, data, type, container) => {
    const orderHTML = data.map(order =>
        `<div class="content-data medium">
            <div class="box">
                <h2 class="title"> Order ${order.orderCode}</h2>
                <div class="info">
                    <span><strong>Customer Code: </strong>${order.customerCode}</span>
                    <span><strong>Deliver Date: </strong> ${order.deliverDate}</span>
                    <span><strong>Expected Date: </strong> ${order.expectedDate}</span>
                </div>
            </div>
        </div>`
    ).join("");
    
    container.innerHTML = orderHTML;
}

export const ordersQuery3 = (api, data, type, container) => {
    const orderHTML = data.map(order =>
        `<div class="content-data medium">
            <div class="box">
                <h2 class="title"> Order ${order.orderCode}</h2>
                <div class="info">
                    <span><strong>Customer Code: </strong>${order.customerCode}</span>
                    <span><strong>Deliver Date: </strong> ${order.deliverDate}</span>
                    <span><strong>Expected Date: </strong> ${order.expectedDate}</span>
                </div>
            </div>
        </div>`
    ).join("");
    
    container.innerHTML = orderHTML;
}

export const ordersQuery4 = (api, data, type, container) => {
    const orderHTML = data.map(order =>
        `<div class="content-data medium">
            <div class="box">
                <h2 class="title"> Order ${order.orderCode}</h2>
                <div class="info">
                    <span><strong>Order Date: </strong>${order.orderDate}</span>
                    <span><strong>Expected Date: </strong> ${order.expectedDate}</span>
                    <span><strong>Deliver Date: </strong> ${order.deliverDate}</span>
                    <span><strong>Status: </strong> ${order.status}</span>
                    <span><strong>Comments: </strong> ${order.comments}</span>
                    <span><strong>Customer: </strong> ${order.customerId}</span>
                </div>
            </div>
        </div>`
    ).join("");
    
    container.innerHTML = orderHTML;
}

export const ordersQuery5 = (api, data, type, container) => {
    const orderHTML = data.map(order =>
        `<div class="content-data medium">
            <div class="box">
                <h2 class="title"> Order ${order.orderCode}</h2>
                <div class="info">
                    <span><strong>Order Date: </strong>${order.orderDate}</span>
                    <span><strong>Expected Date: </strong> ${order.expectedDate}</span>
                    <span><strong>Deliver Date: </strong> ${order.deliverDate}</span>
                    <span><strong>Status: </strong> ${order.status}</span>
                    <span><strong>Comments: </strong> ${order.comments}</span>
                    <span><strong>Customer: </strong> ${order.customerId}</span>
                </div>
            </div>
        </div>`
    ).join("");
    
    container.innerHTML = orderHTML;
}

export const ordersQuery6 = (api, data, type, container) => {
    const orderHTML = data.map(order =>
        `<div class="content-data medium">
            <div class="box">
                <h2 class="title"> Order ${order.orderCode}</h2>
                <div class="info">
                    <span><strong>Order Date: </strong>${order.orderDate}</span>
                    <span><strong>Expected Date: </strong> ${order.expectedDate}</span>
                    <span><strong>Deliver Date: </strong> ${order.deliverDate}</span>
                    <span><strong>Status: </strong> ${order.status}</span>
                    <span><strong>Comments: </strong> ${order.comments}</span>
                    <span><strong>Customer: </strong> ${order.customerId}</span>
                </div>
            </div>
        </div>`
    ).join("");
    
    container.innerHTML = orderHTML;
}

export const ordersQuery7 = (api, data, type, container) => {
    const orderHTML = data.map(order =>
        `<div class="content-data medium">
            <div class="box">
                <div class="info">
                    <span><strong>Status: </strong>${order.status}</span>
                    <span><strong>Count: </strong>${order.count}</span>
                </div>
            </div>
        </div>`
    ).join("");
    
    container.innerHTML = orderHTML;
}
