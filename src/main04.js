// 객체 할당 기본 시스템
const {a1,a2,a3} = {
  a1 : 10,
  a2 : 20,
  a3 : 30,
  a4 : 40}
console.log(a1);

// 
const book = {
  type: 'it',
  title: 'html',
  price: '20000',
  level: 3
}

// 할당값이 없는 경우, 추가 데이터 할당 가능
// '기본 할당값 - 추가된 할당값' 충돌 -> 기본 할당값이 이김
const {type,title,price,level=0} = book;

console.log(type);  // it
console.log(level); // 3

// 기본 할당 이름(키의 변경) -> 이름의 변경 필요한 경우
const welcome = type;
console.log(welcome); // it

// 
const graphic = {
  some : 'paint',
  bookname : 'painter'
}

const {some:subtitle,bookname} = graphic;
console.log(subtitle);  // paint