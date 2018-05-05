var todoList = {
    todos: [],
    displayTodos: function(){
        console.log('My Todos', this.todos);

    },
    addTodo: function(todoText){
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText){
        this.todo[position].todoText = todoText;
        this.displayTodos();
    },
    delteTodo: function(position){
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position){
        var todo = this.todos[position];
        console.log(todo);
        todo.completed = !todo.completed;
        this.displayTodos();
    },
}

todoList.addTodo("item 1")
todoList.displayTodos();
todoList.toggleCompleted(0);
todoList.displayTodos();