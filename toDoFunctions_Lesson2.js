// Functions are just recipes

toDos = ['item 1', 'item 2', 'item 3'];

function displayToDos(){
    console.log('My ToDos: ' + this.toDos);
}

function addToDos(newValue){
    this.toDos.push(newValue);
    displayToDos();
}

function changeToDos(position, newValue){
    this.toDos[position] = newValue;
    displayToDos();
}


function deleteToDos(position){
    this.toDos.splice(position,1);
    displayToDos();
}


displayToDos();

deleteToDos(0);

displayToDos();

displayToDos();

addToDos("item 4");

changeToDos(0,'changed');
deleteToDos(0);

var myName = "Liz";

function sayName(person){
    var secret = 'watchandcode';
    console.log(myName);
};

sayName(); //Liz


console.log(secret);

// If you're inside of sayName, you can look out and see data
//but the opposite isn't true.  If you're outside, you can't
//look in.

