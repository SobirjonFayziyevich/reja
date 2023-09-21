TASK - D

class Shop {
  
  constructor(bread, coffee, tea) {
     this.bread = bread;
     this.coffee = coffee;
     this.tea = tea;
  } 

  sotish() {
     console.log(`Salom bugun 12:30gacha ${this.bread}dona non, ${this.coffee} kofe va ${this.tea}dona choy sotildi.`);
  }
  
  
  
  qabul() {
    console.log(`Bugun qabul qilingan mahsulotlar orasida ${this.coffee}dona kofening miqdori kamroq.`);
  }
    
  
 qoldiq() {
   console.log('Bugun kechki 6:00dan keyin choy va kofedan dona qoldi.'); 
  }
}  
  
 const product = new Shop(5, 8, 4);
 const oldProduct = new Shop(2, 3, 1);
 const newProduct = new Shop ();

 
product.sotish();
oldProduct.qabul();
newProduct.qoldiq();
  
  