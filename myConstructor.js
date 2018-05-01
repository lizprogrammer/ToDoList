function myStocks(name, price, change, marketCap){
    this.name = name;
    this.price = price;
    this.change = change;
    this.marketCap = marketCap;
}

var AMZNN = new myStocks('Amazon', 1000, 15, 800);

console.log(AMZN);