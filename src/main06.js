const color = ['red','blue','green','orange'];

// 나머지 매개변수 : rest parameter
// function myColor(a,b,...c){
//   return{
//     a:a,
//     b:b,
//     c:c
//   }
// }

// function myColor(a,b,...c){
//   return{a,b,c}
// }

// 2차변형: 화살표함수
// const myColor = (a,b,...c) => {return{a,b,c}}

// 3차변형: return 없이 -> 식으로 만들기
const myColor = (a,b,...c) => ({a,b,c})


console.log(myColor(...color));