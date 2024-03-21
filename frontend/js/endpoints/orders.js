export const orders = (api, data, type) => {
    const main = document.querySelector("main");
    const orderHTML = data.map(order =>
        `<div class="content-data medium tall" style="heigth: 320px;">
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

    main.innerHTML = `
        <h1>All orders.</h1>
		<div class="data" id="content-api">
            ${orderHTML}
        </div>`

    // Query 1
    document.getElementById("query-1-orders").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/find-status", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const orderHTML = res.map(order =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title"> ${order}</h2>
                </div>
            </div>`
        ).join("");

        main.innerHTML = `
            <h1>Returns a list with the different states through which an order can go.</h1>
            <div class="data" id="content-api">
                ${orderHTML}
            </div>
        `
    })
    // Query 2
    document.getElementById("query-2-orders").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/order-delivered-late", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const orderHTML = res.map(order =>
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

        main.innerHTML = `
            <h1>Returns a list with the order code, customer code, expected date and delivery date of the orders that have not been delivered on time.</h1>
            <div class="data" id="content-api">
                ${orderHTML}
            </div>
        `
    })
    // Query 3
    document.getElementById("query-3-orders").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/order-delivered-late-at-least", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const orderHTML = res.map(order =>
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

        main.innerHTML = `
            <h1>Returns a list with the order code, customer code, expected date and delivery date of orders whose delivery date was at least two days before the expected date.</h1>
            <div class="data" id="content-api">
                ${orderHTML}
            </div>
        `
    })
    // Query 4
    document.getElementById("query-4-orders").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/rejected-in-year/2009", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const orderHTML = res.map(order =>
            `<div class="content-data medium tall">
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

        main.innerHTML = `
            <h1>Returns a list of all orders that were rejected in 2009.</h1>
            <div class="data" id="content-api">
                ${orderHTML}
            </div>
        `
    })
    // Query 5
    document.getElementById("query-5-orders").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/delivered-january", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const orderHTML = res.map(order =>
            `<div class="content-data medium tall">
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

        main.innerHTML = `
            <h1>Returns a list of all orders that have been delivered in the month of January of any year.</h1>
            <div class="data" id="content-api">
                ${orderHTML}
            </div>
        `
    })
    // Query 6
    document.getElementById("query-6-orders").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/delayed-deliveries", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const orderHTML = res.map(order =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title">${order}</h2>
                </div>
            </div>`
        ).join("");

        main.innerHTML = `
            <h1>Returns the name of customers to whom an order has not been delivered on time.</h1>
            <div class="data" id="content-api">
                ${orderHTML}
            </div>
        `
    })
    // Query 7
    document.getElementById("query-7-orders").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/count-by-state", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const orderHTML = res.map(order =>
            `<div class="content-data medium">
                <div class="box">
                <h2 class="title"> ${order.status}</h2>
                    <div class="info">
                        <span><strong>Count: </strong>${order.count}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        main.innerHTML = `
            <h1>How many orders are there in each state? Sort the result in descending order by the number of orders.</h1>
            <div class="data" id="content-api">
                ${orderHTML}
            </div>
        `
    })

}
