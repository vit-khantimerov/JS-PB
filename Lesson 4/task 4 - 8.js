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

/*************************/
const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];

let arrTry = [
  arr, // 12
  [[[1, 2], [1, 2]], [[2, 1], [1, 2]]], // 12
  [[[[[1, 2]]]]], // 3
  [[[[[1, 2]]], 2], 1], // 6
  [[[[[]]]]], // 0
  [[[[[], 3]]]], // 3
  [[[[[], 3]], "n"]], // Error: element should be a number
  [[[[[], 3]], "n"]], // Error: element should be a number
  "1, 0, 10", // Error: parameter type should be an array
];

for (let i in arrTry) {
  try {
    console.log("f (", arrTry[i], ") >>");
    console.log(f(arrTry[i]), N);
  } catch (error) {
    console.log(error.message);
  }
}

/*****  Результат  *****
PS C:\HTML+\JS PB> node "c:\HTML+\JS PB\Drafts\less 4\task 4 - 8 draft.js"

f ( [ [ [ 1, 2 ], [ 1, 2 ] ], [ [ 2, 1 ], [ 1, 2 ] ] ] ) >>
12

f ( [ [ [ 1, 2 ], [ 1, 2 ] ], [ [ 2, 1 ], [ 1, 2 ] ] ] ) >>
12

f ( [ [ [ [Array] ] ] ] ) >>
3

f ( [ [ [ [Array] ], 2 ], 1 ] ) >>
6

f ( [ [ [ [Array] ] ] ] ) >>
0

f ( [ [ [ [Array] ] ] ] ) >>
3

f ( [ [ [ [Array] ], 'n' ] ] ) >>
Error: element should be a number

f ( [ [ [ [Array] ], 'n' ] ] ) >>
Error: element should be a number

f ( 1, 0, 10 ) >>
Error: parameter type should be an array
*/
