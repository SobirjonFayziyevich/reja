//Backend server qurish: va node.js da expressdan foydalandik.

console.log("Web Serverni boshlash");
const express = require("express");
const { rmSync } = require("fs");
const app = express();  //app orqali expressning instans yasadik. yani app objectini bizga yuboradi.
const http = require("http");

//1: KIRISH KODLAR
//malumotlarga kerakli kodlarni yozamiz.
app.use(express.static("public"));              //app harqanday browserdan kirb keladigan malumotlar uchun ochiq degani. yani faqat puplic folderimni kuradi deani.
app.use(express.json());                       //  kirib kelayotgan json formatni objectga ugirib beradi
app.use(express.urlencoded({extended: true})); //HTML traditional reques form post qilgan malumotni express qabul qilib oladi. 

//2: Session code;




//3: Views code.... Backendda Fronted yasaymiz;
app.set("views", "views"); 
app.set("view engine", "ejs");         //views folderni ichidan malumot olib uqiydi. agar folder nomini uzgartirsak (views) folderni ham nomini uzg


//4 Routing code  roterlarga muljallanga ;

app.get("/", function (req, res) {
    res.render("harid.ejs");
});

//http bizning CORE MODEL
const server = http.createServer(app); // bu server orqali yasab olgan EXPRESS app ozgaruvchimizni pass qilishimiz kerak.
let PORT = 3000;
server.listen(PORT,function () {
    console.log(`The server is running successfully on port: ${PORT}`);
});







