export default class AddTodo {
    constructor() {
        this.btn = document.getElementById('add');
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');
    }

    onClick(callback) {
        this.btn.onclick = () => {
            if (title.value === '' || description.value === '') {
                //alert.classList.remove('d-none');
                //alert.innerText = 'Title and Description are required!!';

                // Agregar temporizador para ocultar la alerta después de 2.5 segundos
                //setTimeout(function () {
                //    alert.classList.add('d-none');
                //}, 2500);
                //return;
                console.error('Error aquí');
            } else {
                callback(this.title.value, this.description.value);
            }
        }
    }
}