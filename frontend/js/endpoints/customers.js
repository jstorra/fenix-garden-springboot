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

    document.getElementById("query-1-customers").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/clients-from-country/spain", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        main.innerHTML = `
            <h1>Returns a list with the name of all Spanish clients.</h1>
            <div class="data" id="content-api">
                ${customerHTML}
            </div>
        `
    })

    const query2 = document.getElementById("query-2-customers");
    const query3 = document.getElementById("query-3-customers");
    const query4 = document.getElementById("query-4-customers");
    const query5 = document.getElementById("query-5-customers");
    const query6 = document.getElementById("query-6-customers");
    const query7 = document.getElementById("query-7-customers");
    const query8 = document.getElementById("query-8-customers");
    const query9 = document.getElementById("query-9-customers");
    const query10 = document.getElementById("query-10-customers");
    const query11 = document.getElementById("query-11-customers");
    const query12 = document.getElementById("query-12-customers");
    const query13 = document.getElementById("query-13-customers");
    const query14 = document.getElementById("query-14-customers");
    const query15 = document.getElementById("query-15-customers");
    const query16 = document.getElementById("query-16-customers");
    const query17 = document.getElementById("query-17-customers");
    const query18 = document.getElementById("query-18-customers");
    const query19 = document.getElementById("query-19-customers");
    const query20 = document.getElementById("query-20-customers");

    


}
