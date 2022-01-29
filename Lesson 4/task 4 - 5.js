/*Урок 5.Задача 5

Создать имплементацию функции `reduce`, 
логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число

```javascript
const arr = [1,2,3];
const acc = 0;
reduce(arr, function(acc, item, i, arr) {}, acc);
```
*/

// Решение
const RED = "\x1B[31m";
const RESET = "\x1b[0m";

function reduce(arr, f, acc) {
  if (!Array.isArray(arr)) {
    throw new Error(RED + "Error: parameter 1 type should be an array" + RESET);
  }
  if (typeof f !== "function") {
    throw new Error(
      RED + "Error: parameter 2 type should be a function" + RESET
    );
  }
  if (typeof acc !== "string" && typeof acc !== "number") {
    throw new Error(
      RED + "Error: parameter 3 type should be a number or string" + RESET
    );
  }
  for (let i in arr) {
    acc = f(acc, arr[i], i, arr);
  }
  console.log(acc);
  return acc;
}

/*************************/
function f(acc, item, i, arr) {
  return (acc += item);
}

/*************************/
const arr = [1, 2, 3];
const acc = 0;

console.log(arr, ">> reduce(arr, f, acc) >>");
reduce(arr, f, acc);
console.log();

console.log('reduce(["W", "o", "r", "l", "d"], f, "Hello ") >>');
reduce(["W", "o", "r", "l", "d"], f, "Hello ");
console.log();

console.log('reduce([], f, "Empty array") >>');
reduce([], f, "Empty array");
console.log();

console.log("reduce(0, f, 0) >>");
try {
  reduce(0, f, 0);
} catch (e) {
  console.log(e.message);
}
console.log();

console.log(arr, ">> reduce(arr, 0, 0) >>");
try {
  reduce(arr, 0, 0);
} catch (e) {
  console.log(e.message);
}
console.log();

console.log(arr, ">> reduce(arr, f, f) >>");
try {
  reduce(arr, f, f);
} catch (e) {
  console.log(e.message);
}
console.log();

/*****  Результат  *****
PS C:\HTML+\JS PB> node "c:\HTML+\JS PB\Lesson 4\task 4 - 5.js"

[ 1, 2, 3 ] >> reduce(arr, f, acc) >>
6

reduce(["W", "o", "r", "l", "d"], f, "Hello ") >>   
Hello World

reduce([], f, "Empty array") >>
Empty array

reduce(0, f, 0) >>
Error: parameter 1 type should be an array

[ 1, 2, 3 ] >> reduce(arr, 0, 0) >>
Error: parameter 2 type should be a function        

[ 1, 2, 3 ] >> reduce(arr, f, f) >>
Error: parameter 3 type should be a number or string
*/
