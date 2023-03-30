export default class View {
    constructor() {
       this.model = null;
       this.table = document.getElementById('table'); 
       const btn = document.getElementById('add');
        btn.onclick = () => {
            const title = document.getElementById('title').value;
            const description = document.getElementById('description').value;
            this.addTodo(title, description);
        }
    }

    setModel(model) {
        this.model = model;
    }

    addTodo(title, description) {
        console.log(title, description);
        this.model.addTodo(title, description); 
    }
    
}