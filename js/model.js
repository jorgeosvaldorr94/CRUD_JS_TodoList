export default class Model {
    constructor () {
        this.view = null;
        this.todo = []
    }

    setView (view) {
        this.view = view;
    }

    getTodos() {
        return this.getTodos;
    }

    addTodo (title, description) {
       console.log(title, description); 
    }
}