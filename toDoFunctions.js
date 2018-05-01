// Functions are just recipes

function sayHiTo(person){
    console.log('Hi ' + person + '!');
};

sayHiTo('Liz');


toDos = ['item 1', 'item 2', 'item 3'];

function displayToDos(){
    console.log('My ToDos: ' + toDos);
}

function addToDos(newValue){
    toDos.push(newValue);
    displayToDos();
}

function changeToDos(position, newValue){
    toDos[position] = newValue;
    displayToDos();
}

function deleteToDos(position){
    toDos.splice(position,1);
    displayToDos();
}

displayToDos();

addToDos("item 4");



changeToDos(0,'changed');
deleteToDos(0);

//displayToDos(toDos);

