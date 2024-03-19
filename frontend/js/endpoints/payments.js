export const payments = (api, data, type, container) => {
    const paymentsHTML = data.map(payment => 
        `<div class="content-data medium">
            <div class="box">
                <h2 class="title">${payment.transactionId}</h2>
                <div class="info">
                    <span><strong>Customer Id:</strong> ${payment.customerCode}</span>
                    <span><strong>Way:</strong> ${payment.wayToPay}</span>
                    <span><strong>Date:</strong> ${payment.paymentDate}</span>
                    <span><strong>Total:</strong> <span style="display: inline; color: #81D43A">$</span>${payment.total}</span>
                </div>
            </div>
        </div>`
    ).join("");

    container.innerHTML = paymentsHTML;
}