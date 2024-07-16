
console.log("web serverni boshladik");
const express = require("express");
const app = express();
const fs = require("fs");

//MongoDB connect.

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err)
    } else {
        user = JSON.parse(data)
    }
});

//MongoDB chaqirish:
const db = require("./server").db();
const mongodb = require("mongodb");

//1: Kirish code
// Har qanday browserdn kelayotgan requestlar un public folder ochiq degani.
app.use(express.static("public"));

//json formatdagi datani objectga exchange qilish.
app.use(express.json());

//html formatdan qabul qilinadigan datalarni serverga kiritish
app.use(express.urlencoded({extended: true}));

// 2: Session code
// 3: Views code

//ejs orqali backend ni ichida frontendni yasash.
app.set("views", "views");
app.set("view engine",  "ejs",);

// 4 Routing code
app.post("/create-item", (req, res) => {
    console.log(req.body);
    console.log("user entered / create-item"); //requestni body qismini tekshirayopmiz.
    // res.end("success");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja},  (err, data) => {
        // if (err) {
        //     console.log(err);
        //     res.end("something went wrong");
        // } else {
        //     res.end("successfully added");
        // }
        console.log(data.ops);
        res.json(data.ops[0]);  //  databaseninig ichidagi ops elementi yangi elementni 0 index bn qushayopti frontenga JSON kurinishidagi
       // element qushayopti.
    });
});

      //Delete  operator.
app.post("/delete-item", (req, res) => {
    const id = req.body.id;

    db.collection("plans").deleteOne(
        { _id: new mongodb.ObjectId(id) },//mongodbning id uchirayopmiz.
        function (err, data) { //mongodbni idni chaqirib oldik.
            res.json({ state: "success" });
        }
    );
});

     //Edit operator.
app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate(
        { _id: new mongodb.ObjectId(data.id)},
        { $set: { reja: data.new_input } },
        function (err, data) {
            res.json({ state: "success" });
        }
    );
});

      //Delete all items section.
app.post("/delete-all", (req, res) => {
    if (req.body.delete_all) {
        db.collection("plans").deleteMany(function () {
            res.json({ state: "hamma rejalar o'chirildi" });
        });
    }
});

   //author .

app.get("/author", function (req, res) {
    res.render("author", { user: user });
});

app.get("/", function (req, res) {
    console.log("user entered / ");
   db.collection("plans")
       .find()
       .toArray((err, data) => {
     if (err) {
         console.log(err);
         res.end("something went wrong");
     } else {
         console.log(data);
         res.render("reja", {items: data});
     }
    });
});
app.get("/gift", function (req, res) {
  res.end(`<h1 style="color:green">You are in gifts section </h1>`);
});

module.exports = app;







































