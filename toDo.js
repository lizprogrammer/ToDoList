// Code goes here
var todos = ["item 1", "item 2", "item 3", "item 4", "item 5"];

console.log(todos);

todos.push("item 6");

console.log(todos[0]);

console.log(todos[5]);

todos.splice(0,1);

todos.splice(3,1);

console.log(todos);

todos[1] = "item 99";

console.log(todos);
