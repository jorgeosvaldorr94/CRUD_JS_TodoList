import AddTodo from "./components/add-todo.js";

export default class View {
    constructor() {
       this.model = null;
       this.table = document.getElementById('table'); 
       this.addTodoForm = new AddTodo();

       this.addTodoForm.onClick((title, description) => {
        return this.addTodo(title, description);
       });
    }

    setModel(model) {
        this.model = model;
    }
    
    toggleCompleted(id) {
        this.model.toggleCompleted(id);
    }

    addTodo(title, description) {
        const todo = this.model.addTodo(title, description); 
        this.createRow(todo);
    }

    removeTodo(id) {
        this.model.removeTodo(id);
        document.getElementById(id).remove();
    }
    
    createRow(todo) {
        const row = table.insertRow();
            // Añadir un id a la fila para poder eliminarla despues
            row.setAttribute('id', todo.id);
            row.innerHTML = `
                <td>${todo.title}</td>
                <td>${todo.description}</td>
                <td class="text-center">
                    
                </td>
                <td class="text-right">
                    <button class="btn btn-primary mb-1">
                      <i class="fa fa-pencil"></i>
                    </button>
                </td>
            `;

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed;
            checkbox.onclick = () => this.toggleCompleted(todo.id);
            row.children[2].appendChild(checkbox);

            // Crear el elemento boton, para eliminar
            const removeBtn = document.createElement('button');
            removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
            removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
            removeBtn.onclick = (e) => this.removeTodo(todo.id);

            // Añadirlo al 4to elemento de la tabla
            row.children[3].appendChild(removeBtn);
    }
}