import { validateToken } from "./validateToken.js";

export const loadMain = (api) => {
    document.getElementById('all-products').addEventListener('click', () => {
        validateToken(api, "/products")
    });
    // implementacion de los demas botones
}