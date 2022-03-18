import data from './data.json';
// js, node_modules 확장자 생략가능
import $ from 'jquery';

$(function(){
  $('body').text('welcome');
})

console.log(data);  //{string: 'javascript', num: 123, boolean: true, null: null, obj: {…}, …}
console.log(data.array);  //[1, 2, 3, 4]
console.log(data.array[1]); //2
console.log(data.obj.a);  //123
console.log(typeof data); //object

// 일반 객체 -> json 파일로 만들기(string 객체)
const color = {
  title: 'red',
  sample: 'apple',
  no: 100
}
console.log(typeof color);
const str = JSON.stringify(color);
console.log(str); //json에 들어가는 타입으로 바뀜 -> string
console.log(typeof str);

const obj = JSON.parse(str);
console.log(obj); //javascript에 들어가는 타입으로 바뀜 -> object
console.log(typeof obj);