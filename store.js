


const moment = require("moment");

function showMeTime() {
    console.log(`ayni vaqt bizda  ${moment().format("DD MM YYYY HH:mm")} ni ko'rsatyabdi`)};


class foodStore {

    constructor(bread, coffee, tea) {
        this.bread = bread;
        this.coffee = coffee;
        this.tea = tea;
    }
  
  sell(bread, coffee, tea) {
    this.bread -= bread; this.coffee -= coffee; this.tea -= tea;
    console.log(`hozirda sizning foodStore ${bread} ta bread ${coffee} ta coffee va ${tea} ta tea sotildi`);
    showMeTime();
  }

  
  qoshish(bread, coffee, tea) {
    this.bread += bread; this.coffee += coffee; this.tea += tea;
    console.log(`hozirda sizning foodStoreda ${bread} ta bread  ${coffee} ta coffee va ${tea} ta tea qoshildi`);
    showMeTime();
  }
  
  qoldiq() {
    console.log(`Bizning foodStoreda  ${this.bread} dona bread, ${this.coffee} dona coffee, va ${this.tea} dona tea qoldi.`);
    console.log("Yana kutub qolamiz!!");
    showMeTime();
  }
  
  }
  
  module.exports = foodStore;