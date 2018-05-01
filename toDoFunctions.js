// Functions are just recipes

function sayHiTo(person){
    console.log('Hi ' + person + '!');
};

sayHiTo('Liz');


toDos = ['item 1', 'item 2', 'item 3'];

function displayToDos(){
    console.log('My ToDos: ' + this.toDos);
}

function addToDos(newValue){
    this.toDos.push(newValue);
    displayToDos();
}



