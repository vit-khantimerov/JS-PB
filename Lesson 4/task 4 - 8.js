/* Урок 4. Задача 8

Напишите функцию `f` . 
    Данная функция принимает один параметр: 
    одноуровневый или многоуровневый массив. 
    Возвращает данная функция сумму всех элементов на всех уровнях.

Обратите внимание что функция должна возвращать число 0, 
    если при проходе всех уровней не было найдено ни одного числа.

Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если на каком то уровне было найдено не число и не массив

```javascript
const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
f(arr); // 12
const arr2 = [[[[[1,2]]]]];
f(arr2); // 3
const arr3 = [[[[[1,2]]],2],1];
f(arr3); // 6
const arr4 = [[[[[]]]]];
f(arr4); // 0
const arr5 = [[[[[],3]]]];
f(arr5); // 3
*/

// Решение

const RED = "\x1B[31m";
const RESET = "\x1b[0m";
const N = "\n";
console.log();

let f = function (arr) {
  if (!Array.isArray(arr)) {
    throw new Error(
      RED + "Error: parameter type should be an array" + RESET + N
    );
  }
  return arr.reduce((flatArr, item) => {
    if (Array.isArray(item)) {
      return flatArr + f(item);
    } else {
      if (typeof item !== "number") {
        throw new Error(RED + "Error: element should be a number" + RESET + N);
      }
      return flatArr + item;
    }
  }, 0);
};

const arr = [
  [
    [1, 2],
    [1, 2],
  ],
  [
    [2, 1],
    [1, 2],
  ],
];
console.log(arr, ">> f(arr) >>");
console.log(f(arr), N); // 12

const arr2 = [[[[[1, 2]]]]];
console.log(arr2, ">> f(arr) >>");
console.log(f(arr2), N); // 3

const arr3 = [[[[[1, 2]]], 2], 1];
console.log(arr3, ">> f(arr) >>");
console.log(f(arr3), N); // 6

const arr4 = [[[[[]]]]];
console.log(arr4, ">> f(arr) >>");
console.log(f(arr4), N); // 0

const arr5 = [[[[[], 3]]]];
console.log(arr5, ">> f(arr) >>");
console.log(f(arr5), N); // 3

console.log('f([1, 2, 3, "n", 4]) >>');
try {
  console.log(f([1, 2, 3, "n", 4]), N); // Error: element should be a number
} catch (error) {
  console.log(error.message);
}

console.log('f([[[[[], 3]], "n"]]) >>');
try {
  console.log(f([[[[[], 3]], "n"]]), N); // Error: element should be a number
} catch (error) {
  console.log(error.message);
}

console.log("f(1, 0, 10) >>");
try {
  console.log(f(1, 0, 10), N); // Error: parameter type should be an array
} catch (error) {
  console.log(error.message);
}

/*****  Результат  *****
PS C:\HTML+\JS PB> node "c:\HTML+\JS PB\Drafts\less 4\task 4 - 8 draft.js"

[ [ [ 1, 2 ], [ 1, 2 ] ], [ [ 2, 1 ], [ 1, 2 ] ] ] >> f(arr) >>
12

[ [ [ [Array] ] ] ] >> f(arr) >>
3

[ [ [ [Array] ], 2 ], 1 ] >> f(arr) >>
6

[ [ [ [Array] ] ] ] >> f(arr) >>
0

[ [ [ [Array] ] ] ] >> f(arr) >>
3

f([1, 2, 3, "n", 4]) >>
Error: element should be a number

f([[[[[], 3]], "n"]]) >>
Error: element should be a number

f(1, 0, 10) >>
Error: parameter type should be an array
*/
