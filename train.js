console.log("Jack Ma maslahatlari");
const list = [
  "yaxshi talaba buling", // 0-20
  "tugri boshliq tanglang va kuproq xato qiling", //20-30
  "uzinggizga ishlashni boshlang", //30-40
  "siz kuchli bulgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya qiling", //50-60
  "endi dam oling, foydasi yuq", // 60
];



// DEFINITION SECTION => TARIF QISMI

//ASYNC Function
async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(list[5]);
      }, 5000);
    });
  }
}
// setTimeout(function() {
//     callback(null, list[5])
// }, 5000);

// CALL SECTION => CHqa
// than / catch

// console.log("passed here 0");
// maslahatBering(65)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");



// async / await

async function run() {
  let javob = await maslahatBering(25);
  console.log(javob);
  javob = await maslahatBering(70);
  console.log(javob);
  javob = await maslahatBering(41);
  console.log(javob);
}
run();
