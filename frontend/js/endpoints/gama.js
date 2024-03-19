export const gamas = (api, data, type, container) => {
    const gamasHTML = data.map(gama =>
        `<div class="content-data medium">
            <div class="box">
                <h2 class="title">${gama.gama}</h2>
                <div class="info">
                    <span><strong>Text Description: </strong> ${gama.textDescription}</span>
                    <span><strong>HTML Descrption: </strong> ${gama.htmlDescription}</span>
                </div>
            </div>
        </div>`
    ).join("");
    
    container.innerHTML = gamasHTML;
}

export const gamasQuery1 = (api, data, type, container) => {
    const gamaqueryHTML = data.map(gamaquery =>
        `<div class="content-data medium">
            <div class="box">
                <h2 class="title">${gamaquery.gama}</h2>
                <div class="info">
                    <span><strong>Customer Name: </strong> ${gamaquery.customerName}</span>
                </div>
            </div>
        </div>`
    ).join("");
    
    container.innerHTML = gamaqueryHTML;
}