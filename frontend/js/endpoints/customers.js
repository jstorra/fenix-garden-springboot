export const customers = (api, data, type, container) => {
    const customerHTML = data.map(customer =>
        `<div class="content-data medium">
            <div class="box">
                <h2 class="title">${customer.customerName}</h2>
                <div class="info">
                    <span><strong>ID:</strong> ${customer.customerCode}</span>
                    <span><strong>Phone:</strong> ${customer.phone}</span>
                    <span><strong>Address:</strong> ${customer.addressLine1}</span>
                    <span><strong>Location:</strong> ${customer.city}, ${customer.country}</span>
                </div>
            </div>
        </div>`
    ).join("");
    
    container.innerHTML = customerHTML;
}
