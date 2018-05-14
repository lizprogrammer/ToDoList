for(var i = 0; i < 3; i ++){
    //console.log('hey');


}

for(var i = 0; i < 3; i ++){
    //console.log(i);


}
var testArray = ['item 1', 'item 2', 'item 3'];
testArray.push('extra item');
//console.log(testArray[0]);
//console.log(testArray[1]);
//console.log(testArray[2]);
for(var i = 0; i < 3; i ++){
    //console.log(testArray[i]);
}

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

    changeTodo: function(position, todoText){
        this.todos[position].todoText = todoText;
        //this.displayTodos();

    },
        toggleCompleted: function(position){
        var todo = this.todos[position];
        console.log(todo);
        todo.completed = !todo.completed;
        //this.displayTodos();
    },

    toggleAll: function(){
        var totalTodos = this.todos.length;;
        var completedTodos = 0;

        // Get number of completed todos
        for(var i = 0; i < totalTodos; i++){
            if(this.todos[i].completed == true)
                completedTodos++;
        }

        // If everything's true, make everything false
        if(completedTodos == totalTodos){
            // make everything false
            for (var i = 0; i < totalTodos; i++)
            {
                this.todos[i].completed = false;
            }
        }
    }
}

todoList.displayTodos();

todoList.addTodo('first');
todoList.addTodo('second');
todoList.addTodo('third');


todoList.toggleCompleted(0);
todoList.toggleCompleted(1);
todoList.toggleCompleted(2);


todoList.displayTodos();

todoList.toggleAll();
todoList.displayTodos();



// if there are no todos
// if this.todos.length is equal to 0
// if this.todos.length === 0
// print your todo list is empty













