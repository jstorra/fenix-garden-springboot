import { customers } from "./customers.js";

export const displayData = (api, data, type) => {
    const container = document.getElementById('content-api');

    if (type === "/customers") {
        customers(api, data, type, container);
    }
    // siguientes condiciones para los demas endpoints
}
