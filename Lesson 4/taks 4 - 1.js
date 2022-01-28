/* Урок 4. Задача 1

Создать имплементацию функции `forEach`, 
    логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
forEach(arr, function(item, i, arr) {});
```
*/

// Решение
const RED = "\x1B[31m"; // цвет шрифта в консоли
const RESET = "\x1b[0m"; // сброс цета

function forEach(arr, f) {
  if (!Array.isArray(arr)) {
    throw new Error(RED + "Error: parameter 1 type should be an array" + RESET);
  }
  if (arr.length === 0) {
    throw new Error(RED + "Error: array can't be an empty" + RESET);
  }
  if (typeof f !== "function") {
    throw new Error(
      RED + "Error: parameter 2 type should be a function" + RESET
    );
  }
  for (let i = 0; i < arr.length; i++) {
    f(arr[i], i, arr);
  }
}

/*************************/

function clg(item, i, arr) {
  console.log(`item = ${item}, i = ${i}, arr = ${arr}`);
}

function f(item, i, arr) {
  console.log(item, typeof item);
}

function f2(item, i, arr) {
  console.log(item * 2);
}

/*************************/

const arr = [1, 2, 3];

console.log("forEach(arr, clg) >>");
forEach(arr, clg);
console.log();

let aaa = [1, 2, 3, 4, 5];
console.log("forEach(aaa, f2) >>");
forEach(aaa, f2);
console.log();

console.log(
  "forEach([1, 2, 3, \"s\"], function f4(item, i, arr) ... ('[',item,']', i ** 2,',', arr) >>"
);
forEach([1, 2, 3, "s"], function f4(item, i, arr) {
  console.log("[", item, "],", i ** 2, ",", arr);
});
console.log();

console.log(
  'forEach([1, 2, 3, "s"], (item, i, arr) => console.log(item * 10, i * 10, arr)) >>'
);
forEach([1, 2, 3, "s"], (item, i, arr) => console.log(item * 10, i * 10, arr));
console.log();

console.log("forEach([0], clg) >>");
forEach([0], clg);
console.log();

console.log("forEach([], f2) >>");
try {
  forEach([], f2);
} catch (e) {
  console.log(e.message);
}
console.log();

console.log("forEach(0, clg) >>");
try {
  forEach(0, clg);
} catch (e) {
  console.log(e.message);
}
console.log();

console.log("forEach([0, 1], 'f') >>");
try {
  forEach([0, 1], "f");
} catch (e) {
  console.log(e.message);
}
console.log();

/*****  Результат *****

[Running] node "c:\HTML+\JS PB\Lesson 4\taks 4 - 1.js"
forEach(arr, clg) >>
item = 1, i = 0, arr = 1,2,3
item = 2, i = 1, arr = 1,2,3
item = 3, i = 2, arr = 1,2,3

forEach(aaa, f2) >>
2
4
6
8
10

forEach([1, 2, 3, "s"], function f4(item, i, arr) ... ('[',item,']', i ** 2,',', arr) >>
[ 1 ], 0 , [ 1, 2, 3, 's' ]
[ 2 ], 1 , [ 1, 2, 3, 's' ]
[ 3 ], 4 , [ 1, 2, 3, 's' ]
[ s ], 9 , [ 1, 2, 3, 's' ]

forEach([1, 2, 3, "s"], (item, i, arr) => console.log(item * 10, i * 10, arr)) >>
10 0 [ 1, 2, 3, 's' ]
20 10 [ 1, 2, 3, 's' ]
30 20 [ 1, 2, 3, 's' ]
NaN 30 [ 1, 2, 3, 's' ]

forEach([0], clg) >>
item = 0, i = 0, arr = 0

forEach([], f2) >>
Error: array can't be an empty

forEach(0, clg) >>
Error: parameter 1 type should be an array

forEach([0, 1], 'f') >>
Error: parameter 2 type should be a function


[Done] exited with code=0 in 0.389 seconds
*/
