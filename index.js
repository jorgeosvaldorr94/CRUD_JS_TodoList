// No cargar el JS hasta que todo el HTML este cargado
document.addEventListener('DOMContentLoaded', function () {

    // Extraer el input title y description
    const title = document.getElementById('title');
    const description = document.getElementById('description');

    // Extraer la tabla
    const table = document.getElementById('table');

    // Extraer la alert
    const alert = document.getElementById('alert');
    
    // Extraer el boton add
    // Add function to Button add
    const btn = document.getElementById('add');

    // Id basico para cada fila
    let id = 1;

    // Funcion para remover la fila
    function removeTodo(id) {
        console.log(id)
        document.getElementById(id).remove();
    }

    btn.onclick = function () {
        addTodo();
    };

    // Function to add new element to table
    function addTodo() {
        if(title.value === '' || description.value === '') {
            alert.classList.remove('d-none');
            alert.innerText = 'Title and Description are required!!';

            // Agregar temporizador para ocultar la alerta después de 2.5 segundos
            setTimeout(function () {
                alert.classList.add('d-none');
            }, 2500);
            return;
        } else {
            
            // Añadir elemento a la tabla
            const row = table.insertRow();
            // Añadir un id a la fila para poder eliminarla despues
            row.setAttribute('id', id++ );
            row.innerHTML = `
                <td>${title.value}</td>
                <td>${description.value}</td>
                <td class="text-center">
                    <input type="checkbox">
                </td>
                <td class="text-right">
                    <button class="btn btn-primary mb-1">
                      <i class="fa fa-pencil"></i>
                    </button>
                </td>
            `;

            // Crear el elemento boton, para eliminar
            const removeBtn = document.createElement('button');
            removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
            removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
            removeBtn.onclick = (e) => removeTodo(row.getAttribute('id'));

            // Añadirlo al 4to elemento de la tabla
            row.children[3].appendChild(removeBtn);
            

        };


    }

});

