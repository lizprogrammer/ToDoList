
///*
//var myComputer = {
//    operatingSystem: 'mac',
//    screenSize: '15 inches',
//    purchaseYear: 2011
//};
//
//console.log(myComputer);
//
//console.log(myComputer.operatingSystem);
//
//console.log(myComputer.screenSize);
//
//console.log(myComputer.purchaseYear);
//*/

var elizabeth = {
    name: 'Elizabeth',
    sayName: function(){
        console.log(this.name);
    }
}

elizabeth.sayName();

var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],

      displayTodos: function() {
        console.log('My Todos', this.todos);
      },

      addTodo: function(todo) {
          this.todos.push(todo);
          this.displayTodos();
        },
        changeTodo: function(position, newValue) {
          this.todos[position] = newValue;
          this.displayTodos();
        },

        deleteTodo: function(position) {
          this.todos.splice(position, 1);
          this.displayTodos();
        }


    };

    todoList.displayTodos();
    console.log("hey");
    todoList.displayTodos();
