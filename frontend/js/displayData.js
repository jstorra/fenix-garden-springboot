import { customers } from "./endpoints/customers.js";
import { products } from "./endpoints/products.js";
import * as orders from "./endpoints/orders.js";
import * as ordersDetails from "./endpoints/orderDetails.js";
import * as gama from "./endpoints/gama.js";

export const displayData = (api, data, type) => {
    if (document.getElementById("dashboard")) {
        document.getElementById("dashboard").remove()
    }
    const container = document.getElementById('content-api');

    if (type === "/customers") {
        customers(api, data, type, container);
    } else if (type === "/products") {
        products(api, data, type, container);
    } else if (type === "/orders") {
        orders.orders(api, data, type, container);
    } else if (type === "/orders/find-status") {
        orders.ordersQuery1(api, data, type, container);
    } else if (type === "/orders/order-delivered-late") {
        orders.ordersQuery2(api, data, type, container);
    } else if (type === "/orders/order-delivered-late-at-least") {
        orders.ordersQuery3(api, data, type, container);
    } else if (type === "/orders/rejected-in-year/2009") {
        orders.ordersQuery4(api, data, type, container);
    } else if (type === "/orders/delivered-january") {
        orders.ordersQuery5(api, data, type, container);
    } else if (type === "/orders/delayed-deliveries") {
        orders.ordersQuery6(api, data, type, container);
    } else if (type === "/orders/count-by-state") {
        orders.ordersQuery7(api, data, type, container);
    } else if (type === "/orderdetails") {
        ordersDetails.ordersDetails(api, data, type, container);
    } else if (type === "/orderdetails/total-revenue") {
        ordersDetails.ordersDetailsQuery1(api, data, type, container);
    } else if (type === "/orderdetails/total-revenue-by-product") {
        ordersDetails.ordersDetailsQuery2(api, data, type, container);
    } else if (type === "/orderdetails/total-revenue-by-product-by-or") {
        ordersDetails.ordersDetailsQuery3(api, data, type, container);
    } else if (type === "/orderdetails/list-total-sales-product-over") {
        ordersDetails.ordersDetailsQuery4(api, data, type, container);
    } else if (type === "/orderdetails/number-of-product-per-order") {
        ordersDetails.ordersDetailsQuery5(api, data, type, container);
    } else if (type === "/orderdetails/total-amount-per-order") {
        ordersDetails.ordersDetailsQuery6(api, data, type, container);
    } else if (type === "/gamaproducts") {
        gama.gamas(api, data, type, container);
    } else if (type === "/gamaproducts/list-gamas") {
        gama.gamasQuery1(api, data, type, container);
    }
    // siguientes condiciones para los demas endpoints
}