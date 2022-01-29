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
console.log();

/*************************/
function f(item, i, arr) {
  return item.length;
}

/*************************/
var arr = ["abcd", "abcde", "ab", "abc"];
console.log(arr, ">> 'let arrLength = arr.map(f)' >>");
let arrLength = arr.map(f);
console.log(arrLength, N); // [ 4, 5, 2, 3 ]

console.log("[1, 2, 3].map(f) >>");
arrLength = [1, 2, 3].map(f);
console.log(arrLength, N); // [ undefined, undefined, undefined ]

console.log("[].map(f) >>");
arrLength = [].map(f);
console.log(arrLength, N); // []

console.log('[1, 2, 3].map("f")');
try {
  arrLength = [1, 2, 3].map("f");
  console.log(arrLength, N);
} catch (e) {
  console.log(RED, "Error: ", e.message, RESET, N); //  Error:  f is not a function
}

/*****  Результат  *****
PS C:\HTML+\JS PB> node "c:\HTML+\JS PB\Lesson 4\task 4 - 7.js"

[ 'abcd', 'abcde', 'ab', 'abc' ] >> 'let arrLength = arr.map(f)' >>
[ 4, 5, 2, 3 ]

[1, 2, 3].map(f) >>
[ undefined, undefined, undefined ]

[].map(f) >>
[]

[1, 2, 3].map("f")
 Error:  f is not a function       
*/
