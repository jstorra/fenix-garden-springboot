import { validateToken } from "./validateToken.js";

export const loadMain = async (api) => {
    validateToken(api, "/validateToken")
    document.getElementById('all-customers').addEventListener('click', () => {
        validateToken(api, "/customers")
    });
    document.getElementById('all-products').addEventListener('click', () => {
        validateToken(api, "/products")
    });


    document.getElementById('all-orders').addEventListener('click', () => {
        validateToken(api, "/orders")
    });
    document.getElementById('query-1-orders').addEventListener('click', () => {
        validateToken(api, "/orders/find-status")
    });
    document.getElementById('query-2-orders').addEventListener('click', () => {
        validateToken(api, "/orders/order-delivered-late")
    });
    document.getElementById('query-3-orders').addEventListener('click', () => {
        validateToken(api, "/orders/order-delivered-late-at-least")
    });
    document.getElementById('query-4-orders').addEventListener('click', () => {
        validateToken(api, "/orders/rejected-in-year/2009")
    });
    document.getElementById('query-5-orders').addEventListener('click', () => {
        validateToken(api, "/orders/delivered-january")
    });
    document.getElementById('query-6-orders').addEventListener('click', () => {
        validateToken(api, "/orders/delayed-deliveries")
    });
    document.getElementById('query-7-orders').addEventListener('click', () => {
        validateToken(api, "/orders/count-by-state")
    });



    document.getElementById('all-orderdetails').addEventListener('click', () => {
        validateToken(api, "/orderdetails")
    });
    document.getElementById('query-1-orderdetails').addEventListener('click', () => {
        validateToken(api, "/orderdetails/total-revenue")
    });
    document.getElementById('query-2-orderdetails').addEventListener('click', () => {
        validateToken(api, "/orderdetails/total-revenue-by-product")
    });
    document.getElementById('query-3-orderdetails').addEventListener('click', () => {
        validateToken(api, "/orderdetails/total-revenue-by-product-by-or")
    });
    document.getElementById('query-4-orderdetails').addEventListener('click', () => {
        validateToken(api, "/orderdetails/list-total-sales-product-over")
    });
    document.getElementById('query-5-orderdetails').addEventListener('click', () => {
        validateToken(api, "/orderdetails/number-of-product-per-order")
    });
    document.getElementById('query-6-orderdetails').addEventListener('click', () => {
        validateToken(api, "/orderdetails/total-amount-per-order")
    });
    document.getElementById('all-gamas').addEventListener('click', () => {
        validateToken(api, "/gamaproducts")
    });
    document.getElementById('query-1-gama').addEventListener('click', () => {
        validateToken(api, "/gamaproducts/list-gamas")
    });
    // implementacion de los demas botones
}
