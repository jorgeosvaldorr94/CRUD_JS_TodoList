export default class Alert {
    constructor(alertId) {
        this.alert = document.getElementById(alertId);
    }

    show(message) {
        this.alert.classList.remove('d-none');
        this.alert.innerText = message;

        // Ocultar la alerta después de 2.5 segundos
        setTimeout(() => {
            this.hide();
        }, 2500);
    }

    hide() {
        this.alert.classList.add('d-none');
    }
}