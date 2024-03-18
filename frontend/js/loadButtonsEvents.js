import { validateToken } from "./validateToken.js";

export const loadButtonsEvents = (api) => {
    document.getElementById('all-products').addEventListener('click', validateToken(api, "/products"));

}