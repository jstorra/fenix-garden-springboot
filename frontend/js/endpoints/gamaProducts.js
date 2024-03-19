export const displayData = (data, type) => {
    const container = document.getElementById('content-api');

    if (type === "/products") {
        const productsHTML = data.map(product => 
            `<div class="content-data">
                <div class="box">
                    <span class="title">${product.name}</span>
                    <div>
                        <strong>${product.productCode}</strong>
                        <strong>${product.gamaProduct}</strong>
                        <p>${product.description}</p> <br/>
                        <span>Amount: $</span> <span>${product.amountInStock}</span> <br/>
                        <span>Sale Price: $</span> <span>${product.salePrice}</span> <br/>
                        <span>Supplier: $</span> <span>${product.supplierPrice}</span>
                    </div>
                </div>
            </div>`
        ).join("");

        container.innerHTML = productsHTML;
    }
    // siguientes condiciones para los demas endpoints
}
