import some from './export01';
import {num} from './export02';
import * as str from './export03';
import data from './data01.json';

console.log(some);
console.log(num.sub);
console.log(str.sub(20));
console.log(str.default);
console.log(data);