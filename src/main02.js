let Rectangle = class{
  constructor(height,width){
    this.height = height;
    this.width = width;
  }
  call(){
    return this.width * this.height;
  }
}
const my = new Rectangle(100,200);
console.log(my.call());

let Rect = class Num {
  constructor(height,width){
    this.height = height;
    this.width = width;
  }
  call(){
    return this.width * this.height;
  }
}
const my1 = new Rect(300,50);
console.log(my1.call());