const color = ['red','blue','green','orange'];

const [car,bus,,my] = color;
console.log(car); // red
console.log(my);  // orange

// 전개연산자 ...
const fruit = ['apple','orange','banana'];
// console.log(fruit[0]);  //apple
// console.log(fruit[1]);  //orange
// console.log(fruit[2]);  //banana

console.log(...fruit);  //apple orange banana

function toOj(a,b,c){
  return {
    a:a,
    b:b,
    c:c
  }
}
console.log(toOj(fruit[0],fruit[1],fruit[2]));  //{a: 'apple', b: 'orange', c: 'banana'}
console.log(toOj(...fruit));  //{a: 'apple', b: 'orange', c: 'banana'}