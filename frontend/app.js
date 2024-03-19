
import { loadLogin } from "./js/loadLogin.js";
import { loadMain } from "./js/loadMain.js";

const api = "http://localhost:8080"

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.href.includes('login.html')) {
        loadLogin(api);
    }
    if (window.location.href.includes('main.html')) {
        document.querySelector(".btnLogOut").addEventListener("click", () => {
            sessionStorage.removeItem("token");
            window.location.href = "http://127.0.0.1:5500/frontend/views/login.html"
        })
        loadMain(api);
    }
})
