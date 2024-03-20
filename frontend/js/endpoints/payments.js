export const payments = (api, data, type) => {
    const main = document.querySelector("main");

    const paymentsHTML = data.map(payment =>
        `<div class="content-data medium">
            <div class="box">
                <h2 class="title">${payment.transactionId}</h2>
                <div class="info">
                    <span><strong>Customer Id:</strong> ${payment.customerCode}</span>
                    <span><strong>Way:</strong> ${payment.wayToPay}</span>
                    <span><strong>Date:</strong> ${payment.paymentDate}</span>
                    <span><strong>Total:</strong> <span style="display: inline; color: #81D43A">$</span>${payment.total}</span>
                </div>
            </div>
        </div>`
    ).join("");

    if (paymentsHTML.length === 0) {
        main.innerHTML = `
            <h1>All payments.</h1>
            <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
            <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
        `
    } else {
        main.innerHTML = `
            <h1>All payments.</h1>
            <div class="data" id="content-api">
                ${paymentsHTML}
            </div>
        `
    }

    // query 1
    document.getElementById("query-1-payments").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/payment-by-paypal", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const paymentsHTML = res.map(payment =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title">${payment.transactionId}</h2>
                    <div class="info">
                        <span><strong>Customer Id:</strong> ${payment.customerCode}</span>
                        <span><strong>Way:</strong> ${payment.wayToPay}</span>
                        <span><strong>Date:</strong> ${payment.paymentDate}</span>
                        <span><strong>Total:</strong> <span style="display: inline; color: #81D43A">$</span>${payment.total}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        if (paymentsHTML.length === 0) {
            main.innerHTML = `
                <h1>Returns a list with all the payments that were made in 2008 through Paypal. Order the result from highest to lowest.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Returns a list with all the payments that were made in 2008 through Paypal. Order the result from highest to lowest.</h1>
                <div class="data" id="content-api">
                    ${paymentsHTML}
                </div>
            `
        }
    })

    // query 2
    document.getElementById("query-2-payments").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/way-to-pay", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const paymentsHTML = res.map(payment =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title">${payment}</h2>
                </div>
            </div>`
        ).join("");

        if (paymentsHTML.length === 0) {
            main.innerHTML = `
                <h1>Returns a list with all the payment methods that appear in the payment table. Please note that no duplicate payment methods should appear.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Returns a list with all the payment methods that appear in the payment table. Please note that no duplicate payment methods should appear.</h1>
                <div class="data" id="content-api">
                    ${paymentsHTML}
                </div>
            `
        }
    })

    // query 3
    document.getElementById("query-3-payments").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/average-payment", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        if (res.length === 0) {
            main.innerHTML = `
                <h1>What was the average payment in 2009?</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>What was the average payment in 2009?</h1>
                <div class="data" id="content-api">
                    <div class="content-data medium">
                        <div class="box">
                            <h2 class="title">${res}</h2>
                        </div>
                    </div>
                </div>
            `
        }
    })

    // query 4
    document.getElementById("query-4-payments").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/total-payment-by-year", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const paymentsHTML = res.map(payment =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title">${payment.paymentDate}</h2>
                    <div class="info">
                        <span><strong>Total:</strong> <span style="display: inline; color: #81D43A">$</span>${payment.total}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        if (paymentsHTML.length === 0) {
            main.innerHTML = `
                <h1>Show the total sum of all payments made for each of the years listed in the 'payments' table.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Show the total sum of all payments made for each of the years listed in the 'payments' table.</h1>
                <div class="data" id="content-api">
                    ${paymentsHTML}
                </div>
            `
        }
    })
}