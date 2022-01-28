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

const RED = "\x1B[31;1m"; // цвет шрифта в консоли
const RESET = "\x1b[0m"; // сброс цета

let f = function (arr) {
  if (!Array.isArray(arr)) {
    throw new Error(RED + "Error: parameter type should be an array" + RESET);
  }
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return acc + f(item);
    } else {
      if (typeof item !== "number") {
        throw new Error(RED + "Error: element should be a number" + RESET);
      }
      return acc + item;
    }
  }, 0);
};

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(f(arr)); // 12
const arr2 = [[[[[1, 2]]]]];
console.log(f(arr2)); // 3
const arr3 = [[[[[1, 2]]], 2], 1];
console.log(f(arr3)); // 6
const arr4 = [[[[[]]]]];
console.log(f(arr4)); // 0
const arr5 = [[[[[], 3]]]];
console.log(f(arr5)); // 3

try {
  console.log(f([1, 2, 3, "n", 4])); // error
} catch (error) {
  console.log(error.message);
}

try {
  console.log(f([[[[[], 3]], "n"]])); // error
} catch (error) {
  console.log(error.message);
}

try {
  console.log(f(1, 0, 10)); // error
} catch (error) {
  console.log(error.message);
}

/*****  Результат  *****
PS C:\HTML+\JS PB> node "c:\HTML+\JS PB\Drafts\less 4\task 4 - 8 draft.js"
12
3
6
0
3
Error: element should be a number       
Error: element should be a number       
Error: parameter type should be an array
*/
