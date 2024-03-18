import { displayData } from "./displayData.js"

export const validateToken = async (api, type) => {
    try {
        const response = await fetch(api + type, {
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            }
        });
        const data = await response.json();
        displayData(data, type);
    } catch (error) {
        let timerInterval;
        Swal.fire({
            icon: "error",
            title: "Your token has expired",
            html: "You will be redirected in <b></b> miliseconds.",
            timer: 2500,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then(() => {
            window.location.href = "index.html"
        })
    }
}
