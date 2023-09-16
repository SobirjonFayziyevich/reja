// Model packagelar 3 xil:
// (1) CORE package:

setTimeout(function () {
    console.log("ishga tushdi");
    }, 5000); //5000 degani 5 sekund;
    
    let number = 0;
    setInterval(function () { //har bir sekundga kodlar harakatini bizga ishga tushirib beraveradi.
      console.log("hisob", number);
      number++;  // look qilganda qiymatini bir baravariga oshirib borish.
    }, 1000);  //buyerdagi son 100 yoki 0 bulsa sonning uzgarish tezligi ortib boraveradi.
    
    const { clear } = require('console');
    //fs - fileSystem;
    
    const fs = require('fs');
    const {networkInterface } = require('os');
    const data = fs.readFileSync('./input.txt', 'utf8');
    console.log(data);
    
    console.log("*****************");
    //yuqoridagi fail systemga uzgartirish kiritamiz.
    
    fs.writeFileSync('./input.txt', `${data} \n\t\t by Sobirjon`);
    const new_data = fs.readFileSync('./input.txt', 'utf8');
    console.log(new_data);
    