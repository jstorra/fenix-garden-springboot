export const ordersDetails = (api, data, type) => {
    const main = document.querySelector("main");
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

    main.innerHTML = `
        <h1>All order details.</h1>
		<div class="data" id="content-api">
            ${ordersDetailsHTML}
        </div>` 

    // Query 1
    document.getElementById("query-1-orderdetails").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/total-revenue", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const ordersDetailsHTML = res.map(orderDetail =>
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

        main.innerHTML = `
            <h1>The billing that the company has had throughout history, indicating the tax base, VAT and the total invoiced. The tax base is calculated by adding the cost of the product by the number of units sold from the 'order_detail' table. VAT is 21% of the tax base, and the total is the sum of the two previous fields.</h1>
            <div class="data" id="content-api">
                ${ordersDetailsHTML}
            </div>
        `
    })

    // Query 2
    document.getElementById("query-2-orderdetails").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/total-revenue-by-product", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const ordersDetailsHTML = res.map(orderDetail =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title"> ${orderDetail.baseImponible} </h2>
                    <div class="info">
                        <span><strong>IVA: </strong> ${orderDetail.iva}</span>
                        <span><strong>Total Renueve: </strong> ${orderDetail.totalRevenue}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        main.innerHTML = `
            <h1>The same information as in query 1, but grouped by product code.</h1>
            <div class="data" id="content-api">
                ${ordersDetailsHTML}
            </div>
        `
    })

    // Query 3
    document.getElementById("query-3-orderdetails").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/total-revenue-by-product-by-or", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const ordersDetailsHTML = res.map(orderDetail =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title"> ${orderDetail.baseImponible} </h2>
                    <div class="info">
                        <span><strong>IVA: </strong> ${orderDetail.iva}</span>
                        <span><strong>Total Renueve: </strong> ${orderDetail.totalRevenue}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        main.innerHTML = `
            <h1>The same information as in query 2, but grouped by product code, filtered by codes starting with 'OR'.</h1>
            <div class="data" id="content-api">
                ${ordersDetailsHTML}
            </div>
        `
    })

    // Query 4
    document.getElementById("query-4-orderdetails").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/list-total-sales-product-over", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const ordersDetailsHTML = res.map(orderDetail =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title"> ${orderDetail.unitsSold} </h2>
                    <div class="info">
                        <span><strong>Total Renueve: </strong> ${orderDetail.totalRevenue}</span>
                        <span><strong>Total With IVA </strong> ${orderDetail.totalWithIVA}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        main.innerHTML = `
            <h1>List the total sales of products that have invoiced more than 3000 euros. The name, units sold, total invoiced and total invoiced with taxes (21% VAT) will be displayed.</h1>
            <div class="data" id="content-api">
                ${ordersDetailsHTML}
            </div>
        `
    })

    // Query 5
    document.getElementById("query-5-orderdetails").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/number-of-product-per-order", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const ordersDetailsHTML = res.map(orderDetail =>
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

        main.innerHTML = `
            <h1>
            Calculate the number of different products in each of the orders.</h1>
            <div class="data" id="content-api">
                ${ordersDetailsHTML}
            </div>
        `
    })

    // Query 6
    document.getElementById("query-6-orderdetails").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/total-amount-per-order", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const ordersDetailsHTML = res.map(orderDetail =>
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

        main.innerHTML = `
            <h1>Calculate the sum of the total quantity of all the products that appear in each of the orders.</h1>
            <div class="data" id="content-api">
                ${ordersDetailsHTML}
            </div>
        `
    })
}
