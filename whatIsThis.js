// Case 1: In a regular function

function logThis(){
    //console.log(this.Buffer.poolSize);
    // Returns everything

    console.log(this.Buffer.poolSize);
}

logThis();


// Case 2: When a function is called as a method


// When you call a function as a method
var myObject = {
    myMethod:  function(){
        console.log(this);
    }
};

myObject.myMethod(); // myObject

// Case 3: When a function is called as a constructor

function Person(name){
    this.name = name;
}

var elizabeth = new Person('elizabeth');
console.log(elizabeth);

// Case 4: When you explicitly set the value of 'this'
// with bind, apply or call

// Method on functions
// Returns a copy of the function
logThis.bind({name: 'Elizabeth'})

var explicitlySetLogThis = logThis.bind({name: 'Elizabeth'});

explicitlySetLogThis();

// Case 5: When you're in a callback function
function outerFunction(callback){
    callback();
}

function logThis(){
    console.log(this);
}

outerFunction(logThis);

function callAsMethod(callback){
    var weirdObject = {
        name: "Don't do this in real life"
    }
    weirdObject.callback = callback;
    weirdObject.callback();
}
callAsMethod(logThis);

function callAsConstructor(callback){
    new callback();
}

callAsConstructor(logThis); // the new object created by logThis
// will be logged to the console


