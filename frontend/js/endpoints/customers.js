export const customers = (api, data, type, container) => {
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

    main.innerHTML = `
        <h1>All customers.</h1>
		<div class="data" id="content-api">
            ${customerHTML}
        </div>
    `

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

        main.innerHTML = `
            <h1>Returns a list with the name of all Spanish clients.</h1>
            <div class="data" id="content-api">
                ${customerHTML}
            </div>
        `
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

        main.innerHTML = `
            <h1>Returns a list with the customer code of those customers who made a payment in 2008. Keep in mind that you must eliminate those customer codes that appear repeated.</h1>
            <div class="data" id="content-api">
                ${customerHTML}
            </div>
        `
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

        main.innerHTML = `
            <h1>Returns a list with all the clients who are from the city of Madrid and whose sales representative has the employee code 11 or 30.</h1>
            <div class="data" id="content-api">
                ${customerHTML}
            </div>
        `
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

        main.innerHTML = `
            <h1>Obtain a list with the name of each client and the first and last name of their sales representative.</h1>
            <div class="data" id="content-api">
                ${customerHTML}
            </div>
        `
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

        main.innerHTML = `
            <h1>Shows the name of customers who have made payments along with the name of their sales representatives.</h1>
            <div class="data" id="content-api">
                ${customerHTML}
            </div>
        `
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

        main.innerHTML = `
            <h1>Displays the name of customers who have not made payments along with the name of their sales representatives.</h1>
            <div class="data" id="content-api">
                ${customerHTML}
            </div>
        `
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

        main.innerHTML = `
            <h1>Returns the name of customers who have made payments and the name of their representatives along with the city of the office to which the representative belongs.</h1>
            <div class="data" id="content-api">
                ${customerHTML}
            </div>
        `
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

        main.innerHTML = `
            <h1>Returns the name of customers who have not made payments and the name of their representatives along with the city of the office to which the representative belongs.</h1>
            <div class="data" id="content-api">
                ${customerHTML}
            </div>
        `
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

        main.innerHTML = `
            <h1>Returns a list showing only customers who have not made any payments.</h1>
            <div class="data" id="content-api">
                ${customerHTML}
            </div>
        `
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

        main.innerHTML = `
            <h1>Returns a list showing only customers who have not placed any orders.</h1>
            <div class="data" id="content-api">
                ${customerHTML}
            </div>
        `
    })
}
