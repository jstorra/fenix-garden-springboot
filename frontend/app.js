import { loadLogin } from "./js/login.js";

const api = "http://localhost:8080"

document.addEventListener("DOMContentLoaded", () => {
    loadLogin(api);
})