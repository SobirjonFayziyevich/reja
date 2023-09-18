// Model package FILE;

const calculate = require("./hisob.js");

const natija = calculate.kopaytirish(40, 50);
console.log("natija:", natija);

console.log('****************');

const natija2 = calculate.qoshish(20, 43);
console.log("natija:", natija2);



const Account = require("./account");

Account.tellMeAboutClass();
Account.tellMeTime();

console.log('================');

const myAccount = new Account("John", 250000, 2345679080);

myAccount.giveMeDetails();



//myAccount.makeDeposit(100000);
//const myAccount = new Account ();