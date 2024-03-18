
import { loadLogin } from "./js/loadLogin.js";
import { loadMain } from "./js/loadMain.js";

const api = "http://localhost:8080"

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.href.includes('login.html')) {
        loadLogin(api);
    }
    if (window.location.href.includes('main.html')) {
        loadMain(api);
    }
})
