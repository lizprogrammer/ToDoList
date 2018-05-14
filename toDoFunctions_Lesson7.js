//JavaScript data types

//Objects
//-- todoList, arrays, functions
//Primitives (Building Blocks)
//-- String
//-- Number
//-- Boolean
//-- Undefined
//-- Null

// String
var myString = "Hello! I'm a string!";
console.log(myString === "Hello! I'm a string!")

// Number
console.log(1 === 1);

// Boolean
console.log(true == true);

// Undefined
var noValue;
var notDefined;
console.log(noValue);
console.log(noValue === notDefined);

// Null
myNull = null;
console.log(myNull);
console.log(myNull === null);

// these look alike but are not the same
var myCompare = null;
myCompare = ({} == {});
console.log(myCompare);


var myPrimitive = 10;

var myObject =
 {
    name: 'gordon'
}

console.log(myPrimitive, ' : my primitive');
console.log(myObject, ' : my object');


// houses
var myHouse = {color: 'blue'};
console.log(myHouse.color);
console.log(myHouse);


myHouse.color = 'red';
console.log(myHouse.color);
console.log(myHouse);


var myHouse1 = {color: 'blue'};
var myHouse2 = myHouse1;

myHouse2.color = 'red';

console.log(myHouse1);
console.log(myHouse2);

// these objects are equal because they point to the same location in memory
console.log(myHouse1 == myHouse2);
























