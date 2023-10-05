
console.log("FrontEnd JS ishga tushdi");

// import axios from "axios";
function itemTemplate(item) {
    return `<li
                    class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
                <span class="item-text">${item.reja}</span>
                <div>
                    <button
                              data-id="${item._id}"
                            class="edit-me btn btn-secondary btn-sm mr-1">O'zgartirish</button>
                    <button
                               data-id="${item._id}"
                            class="delete-me btn btn-danger btn-sm">O'chirish</button>
                </div>
            </li>`;
}

let createField = document.getElementById("create-field");
document.getElementById("create-form").addEventListener("submit", function (e) {
         e.preventDefault(); //boshqa pagega utib ketmasligi un buni yozish shart.

         // modern post (axios) bulsa.

         axios.post("/create-item", { reja: createField.value }) //createField. value sini rejaga tenglashtirib olayopmiz.
             .then((response) => {
                 document.getElementById("item-list")
                     .insertAdjacentHTML("beforeend", itemTemplate(response.data));
                 createField.value = "";
                 createField.focus();
             })
             .catch((err) => {
                 console.log("Iltimos qayta harakat qiling!");
             });
});

              // delete operator

document.addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target.classList.contains("delete-me")) { // (e) targetini ichida contains buyruqi orqali uchirish buyruqini beradi.
        alert("siz delete tugmasini bosdiz");
        if (confirm("Aniq o'chirmoqchimisiz ?")) { //browserga tegishli javascript bn birga ishlaydi.
        }

            axios.post("/delete-item", { id: e.target.getAttribute("data-id") }) //app.jsdagi delete-item postini olib kelayopmiz
              // va (delete) qilmoqchi bulgan elementimizni (id)sini get qilayopmiz.
                .then((response) => {
                    console.log(response.data);
                    e.target.parentElement.parentElement.remove();
                })
                .catch((err) => {
                    console.log("Please try again");
                });
        }
    //edit operator.

    if (e.target.classList.contains("edit-me")) { //buyerda uzgartirishni suralmoqda.
        alert("siz edit tugmasini bosdiz");
    let userInput = prompt(
        "O'zgartirish kiring", //promp orqali qiymatga uzgartirish kiritmoqdamiz.
        e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );
    if (userInput) {
        axios.post("/edit-item", {
                id: e.target.getAttribute("data-id"),
                new_input: userInput,
            })
            .then((response) => {
                console.log(response);
                e.target.parentElement.parentElement.querySelector(
                    ".item-text"
                ).innerHTML = userInput;
            })
            .catch((err) => {
                console.log("Please try again");
            });
       }
   }
});

document.getElementById("clean-all").addEventListener("click", function () {
    axios.post("/delete-all", { delete_all: true })
        .then((response) => {
            alert(response.data.state);
            document.location.reload();
        })
        .catch((err) => {
            console.log("Please try again");
        });
});
