// 주소 기억 -> 데이터 저장
localStorage.setItem('book','javascript');
localStorage.setItem('it','html');

const str = localStorage.getItem('book');
console.log(str);

// 객체
const color = {
  title: 'red',
  sample: 'apple',
  no: ['no01','no02']
};
// localStorage.setItem('sample',color); //[object Object] -> 데이터가 안 들어감
// setItem은 지워도 로컬스토리지에서는 지워지지 않음 -> removeItem
// localStorage.removeItem('sample');
// 지우고 나서 없애도 됨


// 객체 -> JSON string: stringify() -> storage
const som = JSON.stringify(color);
console.log(som);
localStorage.setItem('som',som);
// const obj = localStorage.getItem('som');
// console.log(obj); // -> string 데이터
const obj = JSON.parse(localStorage.getItem('som')); // 객체 데이터로 가져오기
console.log(obj); // -> 객체 데이터
console.log(obj.sample);  // apple
console.log(obj.no);  // ['no01', 'no02']
console.log(obj.no[0]); // no01