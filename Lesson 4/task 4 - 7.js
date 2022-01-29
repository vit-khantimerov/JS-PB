/*Урок 7. Задача 7

Код ниже получает из массива строк новый массив, 
    содержащий их длины:

```javascript
var arr = ['abcd', 'abcde', 'ab', 'abc'];

var arrLength = [];
for (var i = 0; i < arr.length; i++) {
arrLength[i] = arr[i].length;
}

console.log( arrLength ); // 4,5,2,3
```

Перепишите выделенный участок:

- используйте вместо цикла `for` метод `map`
*/

// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
//   arrLength[i] = arr[i].length;
// }

// console.log(arrLength); // 4,5,2,3

// Решение
const RED = "\x1B[31m";
const RESET = "\x1b[0m";
const N = "\n";

/*************************/
function f(item, i, arr) {
  return item.length;
}

/*************************/
var arr = ["abcd", "abcde", "ab", "abc"];
console.log(arr, ">> 'arr.map(f)' >>");
console.log(arr.map(f), N); // [ 4, 5, 2, 3 ]

console.log("[1, 2, 3].map(f) >>");
console.log([1, 2, 3].map(f), N); // [ undefined, undefined, undefined ]

console.log("[].map(f) >>");
console.log([].map(f), N); // []

console.log('[1, 2, 3].map("f")');
try {
  console.log([1, 2, 3].map("f"), N);
} catch (e) {
  console.log(RED, "Error: ", e.message, RESET, N); //  Error:  f is not a function
}

/*****  Результат  *****
PS C:\HTML+\JS PB> node "c:\HTML+\JS PB\Lesson 4\task 4 - 7.js"

[ 'abcd', 'abcde', 'ab', 'abc' ] >> 'arr.map(f)' >>
[ 4, 5, 2, 3 ]

[1, 2, 3].map(f) >>
[ undefined, undefined, undefined ] 

[].map(f) >>
[]

[1, 2, 3].map("f")
 Error:  f is not a function        
*/
