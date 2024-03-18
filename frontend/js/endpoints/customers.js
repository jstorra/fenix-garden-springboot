export const customers = (api, data, type, container) => {
    const customerHTML = data.map(customer =>
        `<div class="content-data medium">
            <div class="box">
                <span class="title">${customer.customerName}</span>
                <div>
                    <strong>${customer.customerCode}</strong>
                    <strong>${customer.contactName}</strong>
                    <span>Phone: <span>${customer.phone}</span> <br/>
                    <span>Address: <span>${customer.addressLine1}</span> <br/>
                    <span>Location: <span>${customer.city}, ${customer.country}</span>
                </div>
            </div>
        </div>`
    ).join("");

    container.innerHTML = customerHTML;
}
