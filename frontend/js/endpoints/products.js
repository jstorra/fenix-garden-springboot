export const products = (api, data, type, container) => {
    const main = document.querySelector("main");
    const productsHTML = data.map(product =>
        `<div class="content-data big">
        <div class="box">
        <h2 class="title">${product.name}</h2>
            <div class="p info">
            <p><strong>Code: </strong>${product.productCode}</p> 
            <p><strong>Gama: </strong>${product.gamaProduct}</p> </br>
            <p><strong>Description: </strong>${product.description}</p> </br>
            <p><strong>Amount: $ </strong>${product.amountInStock} </p> 
            <p><strong>Sale Price: $ </strong>${product.salePrice} </p> 
            <p><strong>Supplier: $ </strong>${product.supplierPrice}</p> 
            </div>
        </div>
    </div>`
    ).join("");

    main.innerHTML = `
        <h1>All products.</h1>
		<div class="data-products" >
                ${productsHTML}
        </div>` 
    // Query 1
    document.getElementById("query-1-products").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/gama-name/Ornamentales", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const productsHTML = res.map(product =>
            `<div class="content-data big">
            <div class="box">
            <h2 class="title">${product.name}</h2>
                <div class="p info">
                <p><strong>Code:</strong>${product.productCode}</p> 
                <p><strong>Gama:</strong>${product.gamaProduct}</p>  </br>
                <p><strong>Description:</strong>${product.description}</p> </br>
                <p><strong>Amount: $ </strong>${product.amountInStock} </p> 
                <p><strong>Sale Price: $ </strong>${product.salePrice} </p> 
                <p><strong>Supplier: $ </strong>${product.supplierPrice}</p> 
                </div>
            </div>
        </div>`
        ).join("");

        main.innerHTML = `
            <h1>Returns a list with all the products that belong to the Ornamental range and that have more than 100 units in stock. The list must be ordered by their sales price, showing the highest prices first.</h1>
            <div class="data-products" >
                ${productsHTML}
            </div>
        `
    })
    // Query 2
    document.getElementById("query-2-products").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/not-in-order", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const productsHTML = res.map(product =>
            `<div class="content-data big">
            <div class="box">
            <h2 class="title">${product.name}</h2>
                <div class="p info">
                <p><strong>Code:</strong>${product.productCode}</p> 
                <p><strong>Gama:</strong>${product.gamaProduct}</p>  </br>
                <p><strong>Description:</strong>${product.description}</p> </br>
                <p><strong>Amount: $ </strong>${product.amountInStock} </p> 
                <p><strong>Sale Price: $ </strong>${product.salePrice} </p> 
                <p><strong>Supplier: $ </strong>${product.supplierPrice}</p> 
                </div>
            </div>
        </div>`
        ).join("");


        main.innerHTML = `
            <h1>Returns a list of products that have never appeared in an order.</h1>
            <div class="data-products" >
                ${productsHTML}
            </div>
        `
    })
    // Query 3
    document.getElementById("query-3-products").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/not-in-order-with-name", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const productsHTML = res.map(product =>
            `<div class="content-data big-medium">
            <div class="box">
            <h2 class="title">${product.name}</h2>
                <div class="p info" >
                <p><strong>Description:</strong>${product.description}</p> </br>
                <p><strong>Image: </strong>${product.image}</p> 
                </div>
            </div>
        </div>`
        ).join("");

        main.innerHTML = `
            <h1>Returns a list of products that have never appeared in an order. The result should show the name, description and image of the product.</h1>
            <div class="data-products" >
                ${productsHTML}
            </div>
        `
    })
    // Query 4
    document.getElementById("query-4-products").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/prices-range", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const productsHTML = res.map(product =>
            `<div class="content-data medium">
            <div class="box">
                <div class="info">
                <p><strong>MAX Sale Price: </strong>${product.maxSalePrice}</p> 
                <p><strong>MIN Sale Price $ </strong>${product.minSalePrice} </p>
                </div>
            </div>
        </div>`
        ).join("");

        main.innerHTML = `
            <h1>Calculate the sales price of the most expensive and cheapest product in the same query.</h1>
            <div class="data" id="content-api">
                ${productsHTML}
            </div>
        `
    })
    // Query 5
    document.getElementById("query-5-products").addEventListener("click", async () => {
        const res = await (await fetch(api + type + "/top-20-best-selling", {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })).json();

        const productsHTML = res.map(product =>
            `<div class="content-data medium">
            <div class="box">
            <h2 class="title">${product.name}</h2>
                <div class="info">
                <p><strong>Code: </strong>${product.productCode}</p>
                </div>
            </div>
        </div>`
        ).join("");

        main.innerHTML = `
            <h1>
            Returns a list of the 20 best-selling products and the total number of units that have been sold for each one. The list must be ordered by the total number of units sold</h1>
            <div class="data" id="content-api">
                ${productsHTML}
            </div>
        `
    })

}
