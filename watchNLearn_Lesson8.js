var todoList = {
    todos:[],
    displayTodos: function(){
        if (this.todos.length === 0){
            console.log("Your todo list is empty");
        }
        else{
            console.log('My todos');
            for(var i = 0; i < this.todos.length; i++)
            {
                //check if .completed is true
                if(this.todos[i].completed == true){
                    console.log('(x) ' , this.todos[i].todoText);
                }
                else{
                    console.log('( ) ' , this.todos[i].todoText);
                }
                // if print with (x)
                //else print with ( )

            }
        }
    },
    addTodo: function(todoText){
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        //this.displayTodos();
    },

    deleteTodo: function(position){
        this.todos.splice(position, 1);
        this.displayTodos();
    },

    changeTodo: function(position, todoText){
        this.todos[position].todoText = todoText;
        //this.displayTodos();

    },
        toggleCompleted: function(position){
        var todo = this.todos[position];
        console.log(todo);
        this.todos[position].completed = !this.todos[position].completed;
        //this.displayTodos();
    },

        toggleAll: function(){
        var totalTodos = this.todos.length;;
        var completedTodos = 0;
        var uncompletedTodos = 0;

        // Get number of completed todos
        for(var i = 0; i < totalTodos; i++){
            if(this.todos[i].completed == true)
                completedTodos++;
            else
                uncompletedTodos++;
        }

        // If everything's true, make everything false
        if(completedTodos == totalTodos){
            // make everything false
            for (var i = 0; i < totalTodos; i++)
            {
                this.todos[i].completed = false;
            }
        }
        else
        {
            for (var i = 0; i < totalTodos; i++)
            {
                this.todos[i].completed = true;
            }
        }
    },
};

// 1. We want to get access to the display todos button.
console.log("Hey is anyone there?");

todoList.addTodo('first');
todoList.addTodo('second');
todoList.addTodo('third');

var handlers = {
    displayTodos: function(){
        todoList.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
    },
    addTodo: function(){
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
    }
};


