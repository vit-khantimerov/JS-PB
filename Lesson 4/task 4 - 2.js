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
console.log();

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

const arr = [1, 2, 3];
filter(arr, even); // [2]
console.log();

let arrTry = [
  arr,
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10n],
  [1, -1, 2, -2, 3, 10],
  [0, 1, 2, 3, 4, 5],
  0,
  [],
];

let ff = positive;
for (let i of arrTry) {
  try {
    if (Array.isArray(i)) {
      console.log(`filter.${ff.name}([${i}]) >>`);
    } else {
      console.log(`filter.${ff.name}(${i}) >>`);
    }
    filter(i, ff);
    console.log();
  } catch (error) {
    console.log(error.message, N);
    if (typeof ff != "function") {
      break;
    }
  }
}

ff = even;
for (let i of arrTry) {
  try {
    if (Array.isArray(i)) {
      console.log(`filter.${ff.name}([${i}]) >>`);
    } else {
      console.log(`filter.${ff.name}(${i}) >>`);
    }
    filter(i, ff);
    console.log();
  } catch (error) {
    console.log(error.message, N);
    if (typeof ff != "function") {
      break;
    }
  }
}

ff = "ff";
for (let i of arrTry) {
  try {
    if (Array.isArray(i)) {
      console.log(`filter.${ff.name}([${i}]) >>`);
    } else {
      console.log(`filter.${ff.name}(${i}) >>`);
    }
    filter(i, ff);
    console.log();
  } catch (error) {
    console.log(error.message, N);
    if (typeof ff != "function") {
      break;
    }
  }
}

/*****  Результат  *****

PS C:\HTML+\JS PB> node "c:\HTML+\JS PB\Lesson 4\task 4 - 2.js"

[ 2 ]

filter.positive([1,2,3]) >>
[ 1, 2, 3 ]

filter.positive([1,2,3,4,5,6,7,8,9,10]) >>
[
  1, 2, 3, 4,   5,
  6, 7, 8, 9, 10n
]

filter.positive([1,-1,2,-2,3,10]) >>
[ 1, 2, 3, 10 ]

filter.positive([0,1,2,3,4,5]) >>
[ 1, 2, 3, 4, 5 ]

filter.positive(0) >>
Error: parameter 1 type should be an array

filter.positive([]) >>
Error: array can't be an empty

filter.even([1,2,3]) >>
[ 2 ]

filter.even([1,2,3,4,5,6,7,8,9,10]) >>
Cannot mix BigInt and other types, use explicit conversions

filter.even([1,-1,2,-2,3,10]) >>
[ 2, -2, 10 ]

filter.even([0,1,2,3,4,5]) >>
[ 0, 2, 4 ]

filter.even(0) >>
Error: parameter 1 type should be an array

filter.even([]) >>
Error: array can't be an empty

filter.undefined([1,2,3]) >>
Error: parameter 2 type should be a function

*/
