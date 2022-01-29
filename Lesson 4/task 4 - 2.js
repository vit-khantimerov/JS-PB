/*Урок 4. Задача 2

Создать имплементацию функции `filter`, 
    логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
filter(arr, function(item, i, arr) {});
```
*/

// Решение
const RED = "\x1B[31m"; // цвет шрифта в консоли
const RESET = "\x1b[0m"; // сброс цета
const N = "\n";

function filter(arr, f) {
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

  let arrFilter = new Array();
  let iFiler = 0;
  for (let i = 0; i < arr.length; i++) {
    if (f(arr[i], i, arr) !== undefined) {
      arrFilter.push(f(arr[i], i, arr));
    }
  }
  console.log(arrFilter);
}

/*************************/

function positive(item) {
  if (item > 0) {
    return item;
  }
}

function even(item) {
  if (item % 2 === 0) {
    return item;
  }
}

/*************************/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr, ">> filter(arr, even) >>");
filter(arr, even); // [ 2, 4, 6, 8, 10 ]
console.log();

var a = [1, -1, 2, -2, 3, 10];
console.log(a, ">> filter(a, positive) >>");
filter(a, positive); // [ 1, 2, 3, 10 ]
console.log();

console.log("filter([0,1,2,3,4,5], item => {if (item % 2 !== 0){.odd.}} >>");
filter([0, 1, 2, 3, 4, 5], (item) => {
  if (item % 2 !== 0) {
    return item; // [ 1, 3, 5 ]
  }
});
console.log();

console.log("filter(0, even) >>");
try {
  filter(0, even);
} catch (e) {
  console.log(e.message, N); //Error: parameter 1 type should be an array
}

console.log("filter([], even) >>");
try {
  filter([], even);
} catch (e) {
  console.log(e.message, N); // Error: array can't be an empty
}

console.log('filter(arr, "f") >>');
try {
  filter(arr, "f");
} catch (e) {
  console.log(e.message, N); // Error: parameter 2 type should be a function
}

/*****  Результат  *****
PS C:\HTML+\JS PB> node "c:\HTML+\JS PB\Lesson 4\task 4 - 2.js"

[ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ] >> filter(arr, even) >>
[ 2, 4, 6, 8, 10 ]

[ 1, -1, 2, -2, 3, 10 ] >> filter(a, positive) >>
[ 1, 2, 3, 10 ]

filter([0,1,2,3,4,5], item => {if (item % 2 !== 0){.odd.}} >>
[ 1, 3, 5 ]

filter(0, even) >>
Error: parameter 1 type should be an array   

filter([], even) >>
Error: array can't be an empty

filter(arr, "f") >>
Error: parameter 2 type should be a function 

*/
