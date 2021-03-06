/*Урок 4. Задача 6

Создать имплементацию функции `reduceRight`, 
    логика работы такая же как и у родного метода.

Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число

```javascript
const arr = [1,2,3];
const acc = 0;
reduceRight(arr, function(acc, item, i, arr) {}, acc);
```
*/

// Решение
const RED = "\x1B[31m";
const RESET = "\x1b[0m";
const N = "\n";
console.log();

function reduceRight(arr, f, acc) {
  if (!Array.isArray(arr)) {
    throw new Error(
      RED + "Error: parameter 1 type should be an array" + RESET + N
    );
  }
  if (typeof f !== "function") {
    throw new Error(
      RED + "Error: parameter 2 type should be a function" + RESET + N
    );
  }
  if (typeof acc !== "string" && typeof acc !== "number") {
    throw new Error(
      RED + "Error: parameter 3 type should be a number or string" + RESET + N
    );
  }
  for (let i in arr) {
    acc = f(acc, arr[arr.length - i - 1], i, arr);
  }
  console.log(acc, N);
  return acc;
}

/*************************/
function fRight(acc, item, i, arr) {
  return (acc += item);
}

/*************************/
const arr = [1, 2, 3];
const acc = 0;

console.log(arr, ">> reduceRight(arr, f, acc) >>");
reduceRight(arr, fRight, acc); // 6

console.log('reduceRight(["W", "o", "r", "l", "d"], f, "Hello ") >>');
reduceRight(["W", "o", "r", "l", "d"], fRight, "Hello "); // Hello dlroW

console.log('reduceRight([], f, "Empty array") >>');
reduceRight([], fRight, "Empty array"); // Empty array

console.log("reduceRight(0, Right, 0) >>");
try {
  reduceRight(0, fRight, 0);
} catch (e) {
  console.log(e.message); // Error: parameter 1 type should be an array
}

console.log(arr, ">> reduceRight(arr, 0, 0) >>");
try {
  reduceRight(arr, 0, 0);
} catch (e) {
  console.log(e.message); // Error: parameter 2 type should be a function
}

console.log(arr, ">> reduceRight(arr, f, f) >>");
try {
  reduceRight(arr, fRight, fRight);
} catch (e) {
  console.log(e.message); // Error: parameter 3 type should be a number or strin
}

/*****  Результат  *****
PS C:\HTML+\JS PB> node "c:\HTML+\JS PB\Lesson 4\task 4 - 6.js"

[ 1, 2, 3 ] >> reduceRight(arr, f, acc) >>
6

reduceRight(["W", "o", "r", "l", "d"], f, "Hello ") >>
Hello dlroW

reduceRight([], f, "Empty array") >>
Empty array

reduceRight(0, Right, 0) >>
Error: parameter 1 type should be an array

[ 1, 2, 3 ] >> reduceRight(arr, 0, 0) >>
Error: parameter 2 type should be a function

[ 1, 2, 3 ] >> reduceRight(arr, f, f) >>
Error: parameter 3 type should be a number or string 
*/
