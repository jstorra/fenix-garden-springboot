import { validateToken } from "./validateToken.js";

export const loadMain = async (api) => {
    validateToken(api, "/validateToken")
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
}
