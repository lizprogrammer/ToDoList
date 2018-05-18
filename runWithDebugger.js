/*function runWithDebugger(ourFunction) {
    debugger;
    ourFunction();
}

runWithDebugger(function logTenNumbers() {
    for(var i = 0; i < 10; i++){
        console.log(i);
    }
});*/

function runWithDebugger(ourFunction){
    debugger;
    ourFunction();
}

function logTenNumbers(){
    for(var i = 0; i < 10; i++)
        console.log(i);
}
// debugger
// ourFunction();



runWithDebugger(function logTenNumbers() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
});

setTimeout(function() {
    console.log('Wake up Liz!');
}, 5000)


var students = ['Tim', 'Funmi', 'Elizabeth'];

function logName(name){
    console.log(name);
}



logName(students[0]);

students.forEach(logName);

students.forEach(function(name){
    console.log(name);
})

function forEach(myArray, myFunction){
    for(var i = 0; i < myArray.length; i++){
        myFunction(myArray[i]);
    }
}

forEach(students, function(student){
    console.log(student);

})