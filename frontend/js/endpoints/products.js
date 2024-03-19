export const products = (api, data, type, container) => {
    const productsHTML = data.map(product =>
        `<div class="content-data big">
        <div class="box">
        <h2 class="title">${product.name}</h2>
            <div>
            <span><strong>Code:</strong>${product.productCode}</span>
            <span><strong>Gama:</strong>${product.gamaProduct}</span>
            <span><strong>Description:</strong>${product.description}</span>
            <span><strong>Amount: $ </strong>${product.amountInStock} </span>
            <span><strong>Sale Price: $ </strong>${product.salePrice} </span>
            <span><strong>Supplier: $ </strong>${product.supplierPrice}</span>
            </div>
        </div>
    </div>`
    ).join("");

    container.innerHTML = productsHTML;
}
