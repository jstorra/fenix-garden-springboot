import { validateToken } from "./validateToken.js";

export const loadMain = async (api) => {
    validateToken(api, "/validateToken")
    document.getElementById('all-customers').addEventListener('click', () => {
        validateToken(api, "/customers")
    });
    // implementacion de los demas botones
}
