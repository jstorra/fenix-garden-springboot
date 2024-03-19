export const employees = (api, data, type, container) => {
    const employeeHTML = data.map(employee => {

        const name = `${employee.name} ${employee.lastName1}`

        const bossCode = employee.bossCode;

        return `<div class="content-data medium">
            <div class="box">
                <h2 class="title">${name.trim()}</h2>
                <div class="info">
                    <span><strong>Employee Id:</strong> ${employee.employeeCode}</span>
                    <span><strong>Email:</strong> ${employee.email}</span>
                    <span><strong>Role:</strong> ${employee.role}</span>
                    <span><strong>Office Id:</strong> ${employee.officeCode}</span>
                    <span><strong>Boss Id:</strong> ${bossCode ?? "No One"}</span>
                </div>
            </div>
        </div>`
    }).join("");

    container.innerHTML = employeeHTML;
}
