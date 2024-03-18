document.getElementById('all-products').addEventListener('click', fetchProducts);

async function fetchAndDisplayData(apiRoute) {
    

    const apiUrl = `http://localhost:8080/${apiRoute}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

function displayData(data) {
    const productsContainer = document.getElementById('content-api');
    if (!productsContainer) {
        console.error('No se encontró el contenedor de productos en el HTML.');
        return;
    }

    // Crear una cadena de HTML para mostrar los datos
    let html = '';
    data.forEach(product => {
        html += `<div class="content-data">
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
    </div>`;
    });

    // Insertar la cadena de HTML en el contenedor de productos
    productsContainer.innerHTML = html;
}


function fetchProducts() {
    fetchAndDisplayData('products');
}

