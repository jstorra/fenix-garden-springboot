import { customers } from "./endpoints/customers.js";
import { offices } from "./endpoints/offices.js";
import { employees } from "./endpoints/employees.js";
import { payments } from "./endpoints/payments.js";
import { gamas } from "./endpoints/gama.js";
import { ordersDetails } from "./endpoints/orderDetails.js";
import { orders } from "./endpoints/orders.js";
import { products } from "./endpoints/products.js";

export const displayData = (api, data, type) => {
    if (document.getElementById("dashboard")) {
        document.getElementById("dashboard").remove()
    }
    
    const container = document.getElementById('content-api');

    if (type === "/customers") {
        customers(api, data, type, container);
    } else if (type === "/offices") {
        offices(api, data, type, container);
    } else if (type === "/employees") {
        employees(api, data, type, container);
    } else if (type === "/payments") {
        payments(api, data, type, container);
    } else if (type === "/gamaproducts") {
        gamas(api, data, type, container);
    }else if (type === "/orderdetails") {
        ordersDetails(api, data, type, container);
    }else if (type === "/orders") {
        orders(api, data, type, container);
    }else if (type === "/products") {
        products(api, data, type, container);
    }
    // siguientes condiciones para los demas endpoints
}