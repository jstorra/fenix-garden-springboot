export const customers = (api, data, type) => {
    const main = document.querySelector("main");
    
    const customerHTML = data.map(customer =>
        `<div class="content-data medium">
            <div class="box">
                <h2 class="title">${customer.customerName}</h2>
                <div class="info">
                    <span><strong>Customer Id:</strong> ${customer.customerCode}</span>
                    <span><strong>Phone:</strong> ${customer.phone}</span>
                    <span><strong>Address:</strong> ${customer.addressLine1}</span>
                    <span><strong>Location:</strong> ${customer.city}, ${customer.country}</span>
                </div>
            </div>
        </div>`
    ).join("");

    if (customerHTML.length === 0) {
        main.innerHTML = `
            <h1>All customers.</h1>
            <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
            <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
        `
    } else {
        main.innerHTML = `
            <h1>All customers.</h1>
            <div class="data" id="content-api">
                ${customerHTML}
            </div>
        `
    }

    // query 1
    document.getElementById("query-1-customers").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/clients-from-country/spain", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const customerHTML = res.map(customer =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title">${customer.customerName}</h2>
                    <div class="info">
                        <span><strong>Customer Id:</strong> ${customer.customerCode}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        if (customerHTML.length === 0) {
            main.innerHTML = `
                <h1>Returns a list with the name of all Spanish clients.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Returns a list with the name of all Spanish clients.</h1>
                <div class="data" id="content-api">
                    ${customerHTML}
                </div>
            `
        }
    })

    // query 2
    document.getElementById("query-2-customers").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/clients-with-payments-year/2008", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const customerHTML = res.map(customerCode =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title" style="font-size: 4rem">${customerCode}</h2>
                </div>
            </div>`
        ).join("");

        if (customerHTML.length === 0) {
            main.innerHTML = `
                <h1>Returns a list with the customer code of those customers who made a payment in 2008. Keep in mind that you must eliminate those customer codes that appear repeated.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Returns a list with the customer code of those customers who made a payment in 2008. Keep in mind that you must eliminate those customer codes that appear repeated.</h1>
                <div class="data" id="content-api">
                    ${customerHTML}
                </div>
            `
        }
    })

    // query 3
    document.getElementById("query-3-customers").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/clients-in-madrid-with-specific-representatives", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const customerHTML = res.map(customer =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title">${customer.customerName}</h2>
                    <div class="info">
                        <span><strong>Customer Id:</strong> ${customer.customerCode}</span>
                        <span><strong>Phone:</strong> ${customer.phone}</span>
                        <span><strong>Address:</strong> ${customer.addressLine1}</span>
                        <span><strong>Location:</strong> ${customer.city}, ${customer.country}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        if (customerHTML.length === 0) {
            main.innerHTML = `
                <h1>Returns a list with all the clients who are from the city of Madrid and whose sales representative has the employee code 11 or 30.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Returns a list with all the clients who are from the city of Madrid and whose sales representative has the employee code 11 or 30.</h1>
                <div class="data" id="content-api">
                    ${customerHTML}
                </div>
            `
        }
    })

    // query 4
    document.getElementById("query-4-customers").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/clients-sales-representatives", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const customerHTML = res.map(customer =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title">${customer.customerName}</h2>
                    <div class="info">
                        <span><strong>Customer Id:</strong> ${customer.customerCode}</span>
                        <span><strong>Rep. Sales Name:</strong> ${customer.repSalesName}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        if (customerHTML.length === 0) {
            main.innerHTML = `
                <h1>Obtain a list with the name of each client and the first and last name of their sales representative.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Obtain a list with the name of each client and the first and last name of their sales representative.</h1>
                <div class="data" id="content-api">
                    ${customerHTML}
                </div>
            `
        }
    })

    // query 5
    document.getElementById("query-5-customers").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/clients-with-payments-and-representatives", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const customerHTML = res.map(customer =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title">${customer.customerName}</h2>
                    <div class="info">
                        <span><strong>Customer Id:</strong> ${customer.customerCode}</span>
                        <span><strong>Rep. Sales Name:</strong> ${customer.repSalesName}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        if (customerHTML.length === 0) {
            main.innerHTML = `
                <h1>Shows the name of customers who have made payments along with the name of their sales representatives.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Shows the name of customers who have made payments along with the name of their sales representatives.</h1>
                <div class="data" id="content-api">
                    ${customerHTML}
                </div>
            `
        }
    })

    // query 6
    document.getElementById("query-6-customers").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/clients-without-payments-and-representatives", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const customerHTML = res.map(customer =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title">${customer.customerName}</h2>
                    <div class="info">
                        <span><strong>Customer Id:</strong> ${customer.customerCode}</span>
                        <span><strong>Rep. Sales Name:</strong> ${customer.repSalesName}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        if (customerHTML.length === 0) {
            main.innerHTML = `
                <h1>Displays the name of customers who have not made payments along with the name of their sales representatives.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Displays the name of customers who have not made payments along with the name of their sales representatives.</h1>
                <div class="data" id="content-api">
                    ${customerHTML}
                </div>
            `
        }
    })

    // query 7
    document.getElementById("query-7-customers").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/clients-with-payments-and-representatives-with-office-city", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const customerHTML = res.map(customer =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title">${customer.customerName}</h2>
                    <div class="info">
                        <span><strong>Customer Id:</strong> ${customer.customerCode}</span>
                        <span><strong>Rep. Sales Name:</strong> ${customer.repSalesName}</span>
                        <span><strong>Office City:</strong> ${customer.officeCity}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        if (customerHTML.length === 0) {
            main.innerHTML = `
                <h1>Returns the name of customers who have made payments and the name of their representatives along with the city of the office to which the representative belongs.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Returns the name of customers who have made payments and the name of their representatives along with the city of the office to which the representative belongs.</h1>
                <div class="data" id="content-api">
                    ${customerHTML}
                </div>
            `
        }
    })

    // query 8
    document.getElementById("query-8-customers").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/clients-without-payments-and-representatives-with-office-city", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const customerHTML = res.map(customer =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title">${customer.customerName}</h2>
                    <div class="info">
                        <span><strong>Customer Id:</strong> ${customer.customerCode}</span>
                        <span><strong>Rep. Sales Name:</strong> ${customer.repSalesName}</span>
                        <span><strong>Office City:</strong> ${customer.officeCity}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        if (customerHTML.length === 0) {
            main.innerHTML = `
                <h1>Returns the name of customers who have not made payments and the name of their representatives along with the city of the office to which the representative belongs.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Returns the name of customers who have not made payments and the name of their representatives along with the city of the office to which the representative belongs.</h1>
                <div class="data" id="content-api">
                    ${customerHTML}
                </div>
            `
        }
    })

    // query 9
    document.getElementById("query-9-customers").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/clients-without-payments", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const customerHTML = res.map(customer =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title">${customer.customerName}</h2>
                    <div class="info">
                        <span><strong>Customer Id:</strong> ${customer.customerCode}</span>
                        <span><strong>Phone:</strong> ${customer.phone}</span>
                        <span><strong>Address:</strong> ${customer.addressLine1}</span>
                        <span><strong>Location:</strong> ${customer.city}, ${customer.country}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        if (customerHTML.length === 0) {
            main.innerHTML = `
                <h1>Returns a list showing only customers who have not made any payments.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Returns a list showing only customers who have not made any payments.</h1>
                <div class="data" id="content-api">
                    ${customerHTML}
                </div>
            `
        }
    })

    // query 10
    document.getElementById("query-10-customers").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/clients-without-orders", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const customerHTML = res.map(customer =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title">${customer.customerName}</h2>
                    <div class="info">
                        <span><strong>Customer Id:</strong> ${customer.customerCode}</span>
                        <span><strong>Phone:</strong> ${customer.phone}</span>
                        <span><strong>Address:</strong> ${customer.addressLine1}</span>
                        <span><strong>Location:</strong> ${customer.city}, ${customer.country}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        if (customerHTML.length === 0) {
            main.innerHTML = `
                <h1>Returns a list showing only customers who have not placed any orders.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Returns a list showing only customers who have not placed any orders.</h1>
                <div class="data" id="content-api">
                    ${customerHTML}
                </div>
            `
        }
    })

    // query 11
    document.getElementById("query-11-customers").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/clients-without-payments-and-orders", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const customerHTML = res.map(customer =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title">${customer.customerName}</h2>
                    <div class="info">
                        <span><strong>Customer Id:</strong> ${customer.customerCode}</span>
                        <span><strong>Phone:</strong> ${customer.phone}</span>
                        <span><strong>Address:</strong> ${customer.addressLine1}</span>
                        <span><strong>Location:</strong> ${customer.city}, ${customer.country}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        if (customerHTML.length === 0) {
            main.innerHTML = `
                <h1>Returns a list showing the customers who have not made any payments and those who have not placed any orders.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Returns a list showing the customers who have not made any payments and those who have not placed any orders.</h1>
                <div class="data" id="content-api">
                    ${customerHTML}
                </div>
            `
        }
    })

    // query 12
    document.getElementById("query-12-customers").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/clients-with-late-deliveries", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const customerHTML = res.map(customer =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title">${customer}</h2>
                </div>
            </div>`
        ).join("");

        if (customerHTML.length === 0) {
            main.innerHTML = `
                <h1>Returns the name of customers to whom an order has not been delivered on time.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Returns the name of customers to whom an order has not been delivered on time.</h1>
                <div class="data" id="content-api">
                    ${customerHTML}
                </div>
            `
        }
    })

    // query 13
    document.getElementById("query-13-customers").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/clients-with-orders-but-no-payments", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const customerHTML = res.map(customer =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title">${customer.customerName}</h2>
                    <div class="info">
                        <span><strong>Customer Id:</strong> ${customer.customerCode}</span>
                        <span><strong>Phone:</strong> ${customer.phone}</span>
                        <span><strong>Address:</strong> ${customer.addressLine1}</span>
                        <span><strong>Location:</strong> ${customer.city}, ${customer.country}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        if (customerHTML.length === 0) {
            main.innerHTML = `
                <h1>Returns a list of customers who have placed an order but have not made any payment.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Returns a list of customers who have placed an order but have not made any payment.</h1>
                <div class="data" id="content-api">
                    ${customerHTML}
                </div>
            `
        }
    })

    // query 14
    document.getElementById("query-14-customers").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/clients-count-by-country", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const customerHTML = res.map(customer =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title">${customer.country}</h2>
                    <div class="info">
                        <span><strong>Customers:</strong> ${customer.customers}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        if (customerHTML.length === 0) {
            main.innerHTML = `
                <h1>How many clients does each country have?</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>How many clients does each country have?</h1>
                <div class="data" id="content-api">
                    ${customerHTML}
                </div>
            `
        }
    })

    // query 15
    document.getElementById("query-15-customers").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/total-clients", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        if (res.length === 0) {
            main.innerHTML = `
                <h1>Calculate the number of clients the company has.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Calculate the number of clients the company has.</h1>
                <div class="data" id="content-api">
                    <div class="content-data medium">
                        <div class="box">
                            <h2 class="title" style="font-size: 4rem">${res}</h2>
                        </div>
                    </div>
                </div>
            `
        }
    })

    // query 16
    document.getElementById("query-16-customers").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/clients-count-city/Madrid", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        if (res.length === 0) {
            main.innerHTML = `
                <h1>How many clients are there with addresses in the city of Madrid?</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>How many clients are there with addresses in the city of Madrid?</h1>
                <div class="data" id="content-api">
                    <div class="content-data medium">
                        <div class="box">
                            <h2 class="title" style="font-size: 4rem">${res}</h2>
                        </div>
                    </div>
                </div>
            `
        }
    })

    // query 17
    document.getElementById("query-17-customers").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/clients-count-in-cities-starting-with/M", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const customerHTML = res.map(customer =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title">${customer.city}</h2>
                    <div class="info">
                        <span><strong>Customers:</strong> ${customer.customers}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        if (customerHTML.length === 0) {
            main.innerHTML = `
                <h1>Calculate how many customers each of the cities that begin with 'M' has?</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Calculate how many customers each of the cities that begin with 'M' has?</h1>
                <div class="data" id="content-api">
                    ${customerHTML}
                </div>
            `
        }
    })

    // query 18
    document.getElementById("query-18-customers").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/clients-without-sales-representative", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        if (res.length === 0) {
            main.innerHTML = `
                <h1>Calculate the number of customers who do not have a sales representative assigned to them.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Calculate the number of customers who do not have a sales representative assigned to them.</h1>
                <div class="data" id="content-api">
                    <div class="content-data medium">
                        <div class="box">
                            <h2 class="title" style="font-size: 4rem">${res}</h2>
                        </div>
                    </div>
                </div>
            `
        }
    })

    // query 19
    document.getElementById("query-19-customers").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/sales-representatives-and-client-count", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const customerHTML = res.map(customer =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title">${customer.repSalesName}</h2>
                    <div class="info">
                        <span><strong>Rep. Sales Id:</strong> ${customer.repSalesCode}</span>
                        <span><strong>Customers:</strong> ${customer.customers}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        if (customerHTML.length === 0) {
            main.innerHTML = `
                <h1>Returns the name of the sales representatives and the number of customers each one serves.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Returns the name of the sales representatives and the number of customers each one serves.</h1>
                <div class="data" id="content-api">
                    ${customerHTML}
                </div>
            `
        }
    })

    // query 20
    document.getElementById("query-20-customers").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/first-last-payment-date-by-client", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const customerHTML = res.map(customer =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title">${customer.customerName}</h2>
                    <div class="info">
                        <span><strong>Rep. Sales Id:</strong> ${customer.customerCode}</span>
                        <span><strong>Contact:</strong> ${customer.contactName}</span>
                        <span><strong>First Payment:</strong> ${customer.firstPayment}</span>
                        <span><strong>Last Payment:</strong> ${customer.lastPayment}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        if (customerHTML.length === 0) {
            main.innerHTML = `
                <h1>Calculate the date of the first and last payment made by each of the clients. The list must show the first and last name of each client.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Calculate the date of the first and last payment made by each of the clients. The list must show the first and last name of each client.</h1>
                <div class="data" id="content-api">
                    ${customerHTML}
                </div>
            `
        }
    })
}
