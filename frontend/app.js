
import { loadLogin } from "./js/login.js";
import { loadButtonsEvents } from "./js/loadButtonsEvents.js";

const api = "http://localhost:8080"

document.addEventListener("DOMContentLoaded", () => {
    loadLogin(api);
    loadButtonsEvents(api);
})

