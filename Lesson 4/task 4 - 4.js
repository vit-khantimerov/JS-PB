/*Урок 4. Задача 4

Создать имплементацию функции `some`, 
    логика работы такая же как и у родного метода.

Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
some(arr, function(item, i, arr) {});
```
*/

// Решение
const RED = "\x1B[31m"; // цвет шрифта в консоли
const RESET = "\x1b[0m"; // сброс цета
const N = "\n";

function some(arr, f) {
  if (!Array.isArray(arr)) {
    throw new Error(RED + "Error: parameter 1 type should be an array" + RESET);
  }
  if (typeof f !== "function") {
    throw new Error(
      RED + "Error: parameter 2 type should be a function" + RESET
    );
  }

  let isSome = false;
  for (let i in arr) {
    isSome = isSome || f(arr[i]);
  }
  console.log(isSome);
}

/*************************/

function positive(item, i, arr) {
  // i, arr не всегда нужны
  return item > 0;
}

/*************************/

const arr = [1, 2, 3];
console.log(arr, ">> some(arr, positive) >>");
try {
  some(arr, positive); // true
} catch (e) {
  console.log(e.message, N);
}
console.log();

let arr2 = [-1];
console.log(arr2, ">> some(arr, positive) >>");
try {
  some(arr2, positive); // false
} catch (e) {
  console.log(e.message, N);
}
console.log();

let arr3 = [];
console.log(arr3, ">> some(arr, positive); >>");
try {
  some(arr3, positive); // false
} catch (e) {
  console.log(e.message, N);
}
console.log();

console.log("some([1, 3, 5], (item) => {return item % 2 === 0}); >>");
try {
  some([1, 3, 5], (item) => {
    return item % 2 === 0; // false
  });
} catch (error) {
  console.log(e.message, N);
}
console.log();

console.log("some([1, 2, 4, 6], (item) => {return item % 2 === 0;}); >>");
try {
  some([1, 2, 4, 6], (item) => {
    return item % 2 === 0; // true
  });
} catch (error) {
  console.log(e.message, N);
}
console.log();

console.log(
  "some(['a', 'bbbb','ccc'], (item) => {return item.length > 2;}); >>"
);
try {
  some(["a", "bbbb", "ccc"], (item) => {
    return item.length > 2; // true
  });
} catch (error) {
  console.log(e.message, N);
}
console.log();

console.log("some(0, positive) >>");
try {
  some(0, positive);
} catch (e) {
  console.log(e.message, N); // Error: parameter 1 type should be an array
}

console.log("some([1,2], 0) >>");
try {
  some([1, 2], 0);
} catch (e) {
  console.log(e.message, N); // Error: parameter 2 type should be a function
}

/*****  Результат  *****
PS C:\HTML+\JS PB> node "c:\HTML+\JS PB\Lesson 4\task 4 - 4.js"

[ 1, 2, 3 ] >> some(arr, positive) >>
true

[ -1 ] >> some(arr, positive) >>
false

[] >> some(arr, positive); >>
false

some([1, 3, 5], (item) => {return item % 2 === 0}); >>
false

some([1, 2, 4, 6], (item) => {return item % 2 === 0;}); >>        
true

some(['a', 'bbbb','ccc'], (item) => {return item.length > 2;}); >>
true

some(0, positive) >>
Error: parameter 1 type should be an array

some([1,2], 0) >>
Error: parameter 2 type should be a function

*/
