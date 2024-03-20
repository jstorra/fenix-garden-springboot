export const offices = (api, data, type) => {
    const main = document.querySelector("main");

    const officeHTML = data.map(office =>
        `<div class="content-data medium">
            <div class="box">
                <h2 class="title">${office.officeCode}</h2>
                <div class="info">
                    <span><strong>Phone:</strong> ${office.phone}</span>
                    <span><strong>Address:</strong> ${office.addressLine1}</span>
                    <span><strong>Location:</strong> ${office.city}, ${office.country}</span>
                </div>
            </div>
        </div>`
    ).join("");

    if (officeHTML.length === 0) {
        main.innerHTML = `
            <h1>All Offices.</h1>
            <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
            <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
        `
    } else {
        main.innerHTML = `
            <h1>All Offices.</h1>
            <div class="data" id="content-api">
                ${officeHTML}
            </div>
        `
    }

    // query 1
    document.getElementById("query-1-offices").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/list-office-and-country", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const officeHTML = res.map(office =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title">${office.officeCode}</h2>
                    <div class="info">
                        <span><strong>City:</strong> ${office.city}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        if (officeHTML.length === 0) {
            main.innerHTML = `
                <h1>Returns a list with the office code and the city where there are offices.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Returns a list with the office code and the city where there are offices.</h1>
                <div class="data" id="content-api">
                    ${officeHTML}
                </div>
            `
        }
    })

    // query 2
    document.getElementById("query-2-offices").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/city-and-phone", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const officeHTML = res.map(office =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title">${office.officeCode}</h2>
                    <div class="info">
                        <span><strong>City:</strong> ${office.city}</span>
                        <span><strong>Phone:</strong> ${office.phone}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        if (officeHTML.length === 0) {
            main.innerHTML = `
                <h1>Returns a list with the city and telephone number of the offices in Spain.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Returns a list with the city and telephone number of the offices in Spain.</h1>
                <div class="data" id="content-api">
                    ${officeHTML}
                </div>
            `
        }
    })

    // query 3
    document.getElementById("query-3-offices").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/list-addresses", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const officeHTML = res.map(address =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title" style="font-size: 2rem">${address}</h2>
                </div>
            </div>`
        ).join("");

        if (officeHTML.length === 0) {
            main.innerHTML = `
                <h1>List the address of the offices that have clients in Fuenlabrada.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>List the address of the offices that have clients in Fuenlabrada.</h1>
                <div class="data" id="content-api">
                    ${officeHTML}
                </div>
            `
        }
    })

    // query 4
    document.getElementById("query-4-offices").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/without-employees-representing-clients-with-fruit-orders", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const officeHTML = res.map(office =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title">${office.officeCode}</h2>
                    <div class="info">
                        <span><strong>Phone:</strong> ${office.phone}</span>
                        <span><strong>Address:</strong> ${office.addressLine1}</span>
                        <span><strong>Location:</strong> ${office.city}, ${office.country}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        if (officeHTML.length === 0) {
            main.innerHTML = `
                <h1>Return the offices where none of the employees who have been the sales representatives of a client who has purchased a product from the Frutales range work.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Return the offices where none of the employees who have been the sales representatives of a client who has purchased a product from the Frutales range work.</h1>
                <div class="data" id="content-api">
                    ${officeHTML}
                </div>
            `
        }
    })
}
