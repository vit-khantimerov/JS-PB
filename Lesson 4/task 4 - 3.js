/*Урок 4. Задача 3

Создать имплементацию функции `every`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
every(arr, function(item, i, arr) {});
```
*/

// Решение
const RED = "\x1B[31m"; // цвет шрифта в консоли
const RESET = "\x1b[0m"; // сброс цета

function every(arr, f) {
  if (!Array.isArray(arr)) {
    throw new Error(RED + "Error: parameter 1 type should be an array" + RESET);
  }
  if (typeof f !== "function") {
    throw new Error(
      RED + "Error: parameter 2 type should be a function" + RESET
    );
  }

  let isEvery = true;
  for (let i in arr) {
    isEvery = isEvery && f(arr[i]);
  }
  console.log(isEvery);
}

/*************************/

function positive(item, i, arr) {
  // i, arr не всегда нужны
  return item > 0;
}

/*************************/

const arr = [1, 2, 3];
console.log(arr, ">> every(arr, positive) >>");
try {
  every(arr, positive);
} catch (e) {
  console.log(e.message);
}
console.log();

let arr2 = [-1];
console.log(arr2, ">> every(arr, positive) >>");
try {
  every(arr2, positive);
} catch (e) {
  console.log(e.message);
}
console.log();

let arr3 = [];
console.log(arr3, ">> every(arr, positive); >>");
try {
  every(arr3, positive);
} catch (e) {
  console.log(e.message);
}
console.log();

console.log("every([2, 4, 6], (item) => {return item % 2 === 0}); >>");
try {
  every([2, 4, 6], (item) => {
    return item % 2 === 0;
  });
} catch (error) {
  console.log(e.message);
}
console.log();

console.log("every([1, 2, 4, 6], (item) => {return item % 2 === 0;}); >>");
try {
  every([1, 2, 4, 6], (item) => {
    return item % 2 === 0;
  });
} catch (error) {
  console.log(e.message);
}
console.log();

console.log(
  "every(['aaa', 'bbbb','ccc'], (item) => {return item.length > 2;}); >>"
);
try {
  every(["aaa", "bbbb", "ccc"], (item) => {
    return item.length > 2;
  });
} catch (error) {
  console.log(e.message);
}
console.log();

console.log("every(0, positive) >>");
try {
  every(0, positive);
} catch (e) {
  console.log(e.message);
}
console.log();

console.log("every([1,2], 0) >>");
try {
  every([1, 2], 0);
} catch (e) {
  console.log(e.message);
}
console.log();

/*****  Результат  *****
[Running] node "c:\HTML+\JS PB\Lesson 4\task 4 - 3.js"
[ 1, 2, 3 ] >> every(arr, positive) >>
true

[ -1 ] >> every(arr, positive) >>
false

[] >> every(arr, positive); >>
true

every([2, 4, 6], (item) => {return item % 2 === 0}); >>
true

every([1, 2, 4, 6], (item) => {return item % 2 === 0;}); >>
false

every(['aaa', 'bbbb','ccc'], (item) => {return item.length > 2;}); >>
true

every(0, positive) >>
Error: parameter 1 type should be an array

every([1,2], 0) >>
Error: parameter 2 type should be a function


[Done] exited with code=0 in 0.334 seconds

*/
