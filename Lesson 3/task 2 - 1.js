/* ДЗ 2. Задача 1

Напишите функцию `f`, которая возвращает куб числа. 
Число передается параметром. 
Данная функция должна обязательно содержать проверку входного параметра, 
    потому что принимать она может только число.

```js
f(2); // 8
f('Content'); // Error: parameter type is not a Number
*/

//  Решение

function f(a) {
  if (typeof a === "number") {
    return a ** 3;
  } else {
    throw new Error("parameter type is not a Number");
  }
}

console.log(f(2));
console.log(f("Content"));

// Результат

// 8
// c:\HTML+\JS PB\HW 2\task 2 - 1.js:20
//         throw new Error('parameter type is not a Number');
//         ^
//
// Error: parameter type is not a Number
