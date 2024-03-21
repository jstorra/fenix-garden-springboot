export const gamas = (api, data, type) => {
    const main = document.querySelector("main");
    const gamasHTML = data.map(gama =>
        `<div class="content-data medium">
            <div class="box">
                <h2 class="title">${gama.gama}</h2>
                <div class="info">
                    <span><strong>Text Description: </strong> ${gama.textDescription}</span>
                </div>
            </div>
        </div>`
    ).join("");

    main.innerHTML = `
        <h1>All gamas.</h1>
		<div class="data" id="content-api">
            ${gamasHTML}
        </div>`
    
    // Query 1
    document.getElementById("query-1-gamaproducts").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/list-gamas", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const gamasHTML = res.map(gamaquery =>
            `<div class="content-data medium">
                <div class="box">
                    <h2 class="title">${gamaquery.gama}</h2>
                    <div class="info">
                        <span><strong>Customer Name: </strong> ${gamaquery.customerName}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        main.innerHTML = `
            <h1>Returns a list of the different product ranges that each customer has purchased.</h1>
            <div class="data" id="content-api">
                ${gamasHTML}
            </div>
        `
    })
}
