export const offices = (api, data, type, container) => {
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

    container.innerHTML = officeHTML;
}
