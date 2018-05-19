//Version 11
function multiplyTwoNumbers(a, b){
    var result = a*b;
    return result;
}

var theProductOfTwoAndTen = multiplyTwoNumbers(2,10);

//console.log(theProductOfTwoAndTen);

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
        if(isNaN(position))
            position = 0;

        this.todos[position].todoText = todoText;
        //this.displayTodos();

    },
        toggleCompleted: function(position){
        if(isNaN(position))
            position = 0;

        var todo = this.todos[position];
        console.log(todo);

        this.todos[position].completed = !this.todos[position].completed;
        //this.displayTodos();
    },

        toggleAll: function(){
        var totalTodos = this.todos.length;;
        var completedTodos = 0;
        var uncompletedTodos = 0;

        this.todos.forEach(function(todo){
            if(todo.completed === true){
                completedTodos++;
            }
        });

        // If everything's true, make everything false
        if(completedTodos == totalTodos)
        {
            console.log('they are all selected');
            this.todos.forEach(function(todo){
                todo.completed = false;
            });

        }
        else
        {
            this.todos.forEach(function(todo){
                todo.completed = true;
            });
        }
    }

};

// 1. We want to get access to the display todos button.
console.log("Hey is anyone there?");


todoList.addTodo('first');
todoList.addTodo('second');
todoList.addTodo('third');



//todoList.toggleAll();
todoList.displayTodos();

var handlers = {

    displayTodos: function(){
        todoList.displayTodos();
        view.displayTodos();
    },

    addTodo: function(){
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },

    changeTodo: function(){
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value)

        // clear text box values
        changeTodoPositionInput.value = '';
        addTodoTextInput.value = '';
        view.displayTodos();
    },

    deleteTodo: function(position){

        todoList.deleteTodo(position);
      //  deleteTodoPositionInput.value = '';
        view.displayTodos();

    },

    toggleCompleted: function(){
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
        view.displayTodos();
    },

    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    }
};



var view = {
    displayTodos: function() {


        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';

//        for (var i = 0; i <  todoList.todos.length; i++){
//            var todoLi = document.createElement('li');
//            var todo = todoList.todos[i];
//
//            var todoTextWithCompletion = '';
//            if(todo.completed === true){
//                todoTextWithCompletion = '(x) ' + todo.todoText;
//            }
//            else{
//                todoTextWithCompletion = '( ) ' + todo.todoText;
//            }
//
//            todoLi.id = i;
//            todoLi.textContent = todoTextWithCompletion;
//            todoLi.appendChild(this.createDeleteButton());
//            //todoLi.textContent = todoList.todos[i].todoText;
//            todosUl.appendChild(todoLi);
//        }

        todoList.todos.forEach(function(todo, position){

            var todoLi = document.createElement('li');
            var todoTextWithCompletion = '';

            if(todo.completed === true)
            {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            }
            else
            {
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }

            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            //todoLi.textContent = todoList.todos[i].todoText;
            todosUl.appendChild(todoLi);

        }, this);
    },

    createDeleteButton: function(){
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';

        return deleteButton;
    },

    setUpEventListeners: function()
    {
        var todosUl = document.querySelector('ul');
        todosUl.addEventListener('click', function(event)
        {
            // Get the element that was clicked on.
            var elementClicked = event.target;

            // Check if elementClicked is a delete button.
            if(elementClicked.className === 'deleteButton')
            {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        });
    }
};

view.displayTodos();
view.setUpEventListeners();



