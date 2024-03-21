export const employees = (api, data, type) => {
    const main = document.querySelector("main");

    const employeeHTML = data.map(employee => {
        const name = `${employee.name} ${employee.lastName1}`
        return `<div class="content-data medium tall">
            <div class="box">
                <h2 class="title">${name.trim()}</h2>
                <div class="info">
                    <span><strong>Employee Id:</strong> ${employee.employeeCode}</span>
                    <span><strong>Email:</strong> ${employee.email}</span>
                    <span><strong>Role:</strong> ${employee.role}</span>
                    <span><strong>Office Id:</strong> ${employee.officeCode}</span>
                    <span><strong>Boss Id:</strong> ${employee.bossCode ?? "No One"}</span>
                </div>
            </div>
        </div>`
    }).join("");

    if (employeeHTML.length === 0) {
        main.innerHTML = `
            <h1>All employees.</h1>
            <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
            <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
        `
    } else {
        main.innerHTML = `
            <h1>All employees.</h1>
            <div class="data" id="content-api">
                ${employeeHTML}
            </div>
        `
    }

    // query 1
    document.getElementById("query-1-employees").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/employees-under-supervisor-code/7", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        if (res.error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${res.message}`,
                showConfirmButton: false,
                timer: 2500,
                timerProgressBar: true,
                footer: `${res.help}`
            });
        } else {
            const employeeHTML = res.map(employee =>
                `<div class="content-data medium">
                    <div class="box">
                        <h2 class="title">${employee.employeeName.trim()}</h2>
                        <div class="info">
                            <span><strong>Employee Id:</strong> ${employee.employeeCode}</span>
                            <span><strong>Email:</strong> ${employee.email}</span>
                            <span><strong>Boss Id:</strong> ${employee.bossCode}</span>
                        </div>
                    </div>
                </div>`
            ).join("");
    
            if (employeeHTML.length === 0) {
                main.innerHTML = `
                    <h1>Returns a list with the first name, last name and email of the employees whose boss has a boss code equal to 7.</h1>
                    <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                    <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
                `
            } else {
                main.innerHTML = `
                    <h1>Returns a list with the first name, last name and email of the employees whose boss has a boss code equal to 7.</h1>
                    <div class="data" id="content-api">
                        ${employeeHTML}
                    </div>
                `
            }
        }
    })

    // query 2
    document.getElementById("query-2-employees").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/boss-details", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const employeeHTML = res.map(employee =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title">${employee.employeeName.trim()}</h2>
                    <div class="info">
                        <span><strong>Employee Id:</strong> ${employee.employeeCode}</span>
                        <span><strong>Email:</strong> ${employee.email}</span>
                        <span><strong>Role:</strong> ${employee.role}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        if (employeeHTML.length === 0) {
            main.innerHTML = `
                <h1>Returns the position name, first name, last name and email of the head of the company.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Returns the position name, first name, last name and email of the head of the company.</h1>
                <div class="data" id="content-api">
                    ${employeeHTML}
                </div>
            `
        }
    })

    // query 3
    document.getElementById("query-3-employees").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/non-sales-representatives-details", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const employeeHTML = res.map(employee =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title">${employee.employeeName.trim()}</h2>
                    <div class="info">
                        <span><strong>Employee Id:</strong> ${employee.employeeCode}</span>
                        <span><strong>Role:</strong> ${employee.role}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        if (employeeHTML.length === 0) {
            main.innerHTML = `
                <h1>Returns a list with the first and last name and position of those employees who are not sales representatives.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Returns a list with the first and last name and position of those employees who are not sales representatives.</h1>
                <div class="data" id="content-api">
                    ${employeeHTML}
                </div>
            `
        }
    })

    // query 4
    document.getElementById("query-4-employees").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/employees-with-supervisors", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const employeeHTML = res.map(employee =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title">${employee.employeeName.trim()}</h2>
                    <div class="info">
                        <span><strong>Employee Id:</strong> ${employee.employeeCode}</span>
                        <span><strong>Boss Name:</strong> ${employee.bossName ?? "No One"}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        if (employeeHTML.length === 0) {
            main.innerHTML = `
                <h1>Returns a list with the names of the employees along with the names of their bosses.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Returns a list with the names of the employees along with the names of their bosses.</h1>
                <div class="data" id="content-api">
                    ${employeeHTML}
                </div>
            `
        }
    })

    // query 5
    document.getElementById("query-5-employees").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/employees-with-supervisors-and-grand-supervisors", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const employeeHTML = res.map(employee =>
            `<div class="content-data medium tall">
                <div class="box">
                    <h2 class="title">${employee.employeeName.trim()}</h2>
                    <div class="info">
                        <span><strong>Employee Id:</strong> ${employee.employeeCode}</span>
                        <span><strong>Boss Name:</strong> ${employee.bossName ?? "No One"}</span>
                        <span><strong>GrandBoss Name:</strong> ${employee.grandBossName ?? "No One"}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        if (employeeHTML.length === 0) {
            main.innerHTML = `
                <h1>Returns a list showing the name of each employee, the name of their boss, and the name of their boss's boss.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Returns a list showing the name of each employee, the name of their boss, and the name of their boss's boss.</h1>
                <div class="data" id="content-api">
                    ${employeeHTML}
                </div>
            `
        }
    })

    // query 6
    document.getElementById("query-6-employees").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/employees-without-office", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const employeeHTML = res.map(employee => {
            const name = `${employee.name} ${employee.lastName1}`
            return `<div class="content-data medium tall">
                <div class="box">
                    <h2 class="title">${name.trim()}</h2>
                    <div class="info">
                        <span><strong>Employee Id:</strong> ${employee.employeeCode}</span>
                        <span><strong>Email:</strong> ${employee.email}</span>
                        <span><strong>Role:</strong> ${employee.role}</span>
                        <span><strong>Office Id:</strong> ${employee.officeCode}</span>
                        <span><strong>Boss Id:</strong> ${employee.bossCode ?? "No One"}</span>
                    </div>
                </div>
            </div>`
        }).join("");

        if (employeeHTML.length === 0) {
            main.innerHTML = `
                <h1>Returns a list that shows only employees who do not have an associated office.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Returns a list that shows only employees who do not have an associated office.</h1>
                <div class="data" id="content-api">
                    ${employeeHTML}
                </div>
            `
        }
    })

    // query 7
    document.getElementById("query-7-employees").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/employees-without-clients", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const employeeHTML = res.map(employee => {
            const name = `${employee.name} ${employee.lastName1}`
            return `<div class="content-data medium tall">
                <div class="box">
                    <h2 class="title">${name.trim()}</h2>
                    <div class="info">
                        <span><strong>Employee Id:</strong> ${employee.employeeCode}</span>
                        <span><strong>Email:</strong> ${employee.email}</span>
                        <span><strong>Role:</strong> ${employee.role}</span>
                        <span><strong>Office Id:</strong> ${employee.officeCode}</span>
                        <span><strong>Boss Id:</strong> ${employee.bossCode ?? "No One"}</span>
                    </div>
                </div>
            </div>`
        }).join("");

        if (employeeHTML.length === 0) {
            main.innerHTML = `
                <h1>Returns a list that shows only employees who do not have a client associated with them.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Returns a list that shows only employees who do not have a client associated with them.</h1>
                <div class="data" id="content-api">
                    ${employeeHTML}
                </div>
            `
        }
    })

    // query 8
    document.getElementById("query-8-employees").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/employees-without-clients-and-office-details", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const employeeHTML = res.map(employee =>
            `<div class="content-data medium tall">
                <div class="box">
                    <h2 class="title">${employee.employeeName}</h2>
                    <div class="info">
                        <span><strong>Employee Id:</strong> ${employee.employeeCode}</span>
                        <span><strong>Role:</strong> ${employee.role}</span>
                        <span><strong>Office Id:</strong> ${employee.officeCode}</span>
                        <span><strong>Boss Id:</strong> ${employee.bossCode ?? "No One"}</span>
                        <span><strong>Location:</strong> ${employee.officeCity}, ${employee.officeCountry}</span>
                        <span><strong>Phone:</strong> ${employee.officePhone}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        if (employeeHTML.length === 0) {
            main.innerHTML = `
                <h1>Returns a list that shows only the employees who do not have an associated client along with the data of the office where they work.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Returns a list that shows only the employees who do not have an associated client along with the data of the office where they work.</h1>
                <div class="data" id="content-api">
                    ${employeeHTML}
                </div>
            `
        }
    })

    // query 9
    document.getElementById("query-9-employees").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/employees-without-office-and-clients", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const employeeHTML = res.map(employee => {
            const name = `${employee.name} ${employee.lastName1}`
            return `<div class="content-data medium tall">
                <div class="box">
                    <h2 class="title">${name.trim()}</h2>
                    <div class="info">
                        <span><strong>Employee Id:</strong> ${employee.employeeCode}</span>
                        <span><strong>Email:</strong> ${employee.email}</span>
                        <span><strong>Role:</strong> ${employee.role}</span>
                        <span><strong>Office Id:</strong> ${employee.officeCode}</span>
                        <span><strong>Boss Id:</strong> ${employee.bossCode ?? "No One"}</span>
                    </div>
                </div>
            </div>`
        }).join("");

        if (employeeHTML.length === 0) {
            main.innerHTML = `
                <h1>Returns a list showing the employees who do not have an associated office and those who do not have an associated client.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Returns a list showing the employees who do not have an associated office and those who do not have an associated client.</h1>
                <div class="data" id="content-api">
                    ${employeeHTML}
                </div>
            `
        }
    })

    // query 10
    document.getElementById("query-10-employees").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/employees-without-clients-and-supervisor", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const employeeHTML = res.map(employee =>
            `<div class="content-data medium tall">
                <div class="box">
                    <h2 class="title">${employee.employeeName}</h2>
                    <div class="info">
                        <span><strong>Employee Id:</strong> ${employee.employeeCode}</span>
                        <span><strong>Email:</strong> ${employee.email}</span>
                        <span><strong>Role:</strong> ${employee.role}</span>
                        <span><strong>Boss Id:</strong> ${employee.bossCode ?? "No One"}</span>
                        <span><strong>Boss Name:</strong> ${employee.bossName ?? "No One"}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        if (employeeHTML.length === 0) {
            main.innerHTML = `
                <h1>Returns a list with the data of employees who do not have associated clients and the name of their associated boss.</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>Returns a list with the data of employees who do not have associated clients and the name of their associated boss.</h1>
                <div class="data" id="content-api">
                    ${employeeHTML}
                </div>
            `
        }
    })

    // query 11
    document.getElementById("query-11-employees").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/total-employees", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        if (res.length === 0) {
            main.innerHTML = `
                <h1>How many employees are there in the company?</h1>
                <h2 style="color: #81D43A; text-align: center; font-size: 4rem; margin-bottom: 50px">There is no data to show</h2>
                <img src="http://127.0.0.1:5500/frontend/resources/nodata.jpg" alt="NO DATA TO SHOW" style="min-width: 250px; width: 50%; height: 50%; display: block; margin: 0 auto;"/>
            `
        } else {
            main.innerHTML = `
                <h1>How many employees are there in the company?</h1>
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
}
