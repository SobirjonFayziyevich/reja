//// Task - E  ////

function reverseString(str) {
    if (str === "")
        return "";
    else
        return reverseString(str.substr(1)) + str.charAt(0);
}
let str = "olleh";
const input = reverseString(str);
console.log(input);



//// task - D////

//
// function reverse(str) {
//  if (str==="")
//   return"";
//       else
//        return reverse(str.substring(1)) + str.charAt(0);
// }
//
// let str = "osh";
// const output = reverse(str);
// console.log(output);

////////////////////////////////////////////////////////


// console.log("Jack Ma maslahatlar");
// const list = [
//  'yaxshi student boling', //0-20
//  'togri boshiq tanlang va koproq hato qiling', // 20-30
//  'oz ishingizni boshlang', // 30-40
//  'siz kuchli bolgan narsalarni qiling', //40-50
//  'yoshlarga investitsiya qiling', // 50-60
//  'endi dam oling, foydasi yoq'
// ];
//
//
// function maslahatbering (a, callback) {
//  if ( typeof a !== "number") callback("insert a number", null);
//  else if (a <= 20) callback(null, list[0]);
//  else if (a > 20 && a <= 30) callback(null, list[1]);
//  else if (a > 30 && a <= 40) callback(null, list[2]);
//  else if (a > 40 && a <= 50) callback(null, list[3]);
//  else if (a > 50 && a <= 60) callback(null, list[4]);
//  else {
//   setTimeout(function () {
//    callback(null, list[5]);
//   }, 5000);
//  }
// }
//
//
// console.log("passed here 0")
// maslahatbering(25, (err, data) => {
//  if(err) console.log("ERROR:", err)
//  else {
//   console.log("javob:", data);
//  }
// })
//
// console.log("passed here 1");

/////////


