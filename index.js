// Modellar;
// CORE: setTimeout , setInterval, functionsystem (fs),

//EXTERNAL model: moment, inquirer, requirer, validator, uuid,

const moment = require("moment");
const time = moment().format("YYYY-MM-DD");  //format ichiga hech narsa yozilmasa (bydefault) buladi.
console.log(time);

setInterval(() => {
  const time = moment().format();
  console.log(`hozirgi vaqt: ${time}`);
}, 5000);

const inquirer = require("inquirer");
inquirer
.prompt([{ type: "input", name: "raqam", message: "raqamni kiriting? " }])
.then((answer) => {
  console.log("men kiritgan raqam qiymati: ", answer.raqam);
})
.catch((err) => console.log(err));

//validator;
const validator = require("validator");
//const test = validator.isEmail("bas@ket.com"); // email bulmasa false qiymat beradi.

//const test = validator.isInt("123"); //string kurinishidagi son  bulmasa qiymat false bulaveradi.
const test = validator.isIP("121.175.70.224"); // agar IP da turt juftlik raqamlar bulmsa false buladi.
console.log("test:", test);

// uuid:
const { v4: uuid4 } = require("uuid");
const random = uuid4();      //random string hosil qiladi.
console.log("random:", random); 

const chalk = require("chalk");
const log = console.log;

log(chalk.blue(" Hello ") + random + chalk.red(" ! "))

log(chalk.blue(`uuid creates ${random}`)); //uuidlarim kukrangga kirdi.
log(chalk.red(`uuid creates ${random}`)); // uuidni qizil rangga uzgartir dedim.
 





//FILE