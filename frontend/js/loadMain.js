import { validateToken } from "./validateToken.js";

export const loadMain = async (api) => {
    validateToken(api, "/validateToken")

    const username = document.querySelector(".username");
    username.textContent = sessionStorage.getItem("username")

    document.getElementById('all-customers').addEventListener('click', () => {
        validateToken(api, "/customers")
    });
    document.getElementById('all-offices').addEventListener('click', () => {
        validateToken(api, "/offices")
    });
    document.getElementById('all-employees').addEventListener('click', () => {
        validateToken(api, "/employees")
    });
    document.getElementById('all-payments').addEventListener('click', () => {
        validateToken(api, "/payments")
    });
    document.getElementById('all-gamaproducts').addEventListener('click', () => {
        validateToken(api, "/gamaproducts")
    });
    document.getElementById('all-orderdetails').addEventListener('click', () => {
        validateToken(api, "/orderdetails")
    });
    document.getElementById('all-orders').addEventListener('click', () => {
        validateToken(api, "/orders")
    });
    document.getElementById('all-products').addEventListener('click', () => {
        validateToken(api, "/products")
    });
}
