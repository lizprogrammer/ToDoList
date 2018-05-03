
var myComputer = {
    operatingSystem: 'mac',
    screenSize: '15 inches',
    purchaseYear: 2011
};

console.log(myComputer);

console.log(myComputer.operatingSystem);

console.log(myComputer.screenSize);

console.log(myComputer.purchaseYear);

var elizabeth = {
    name: 'Elizabeth',
    sayName: function(){
        console.log(this);
    }
}

elizabeth.sayName();
