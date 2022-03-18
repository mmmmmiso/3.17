let str = `
010-1234-5678
Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode.
the aabbccddeeffgg
The aabbccddeeffgg
aaa@naver.com
abc@gmail.com
`

let exp = /naver/gi;
console.log(exp.test(str));
// console.log(str.replace(exp,'google'));
// console.log(str); // 본체가 바뀌진 않음

// 본체를 바꾸기
str = str.replace(exp,'google');
console.log(str);