/* ДЗ 2. Задача 7

Сделайте функцию `getDivisors`, 
    которая параметром принимает число и возвращает массив его делителей 
    (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой). 
Данная функция должна обьязательно содержать проверку входного параметра, 
    потому что принимать она может только число больше 0.

```js
getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0
*/

//  Решение

function getDivisors(a) {
  if (a === 0) {
    throw new Error("parameter can't be a 0");
  }
  if (a < 0) {
    throw new Error("parameter should be bigger then 0");
    // Данная функция может принимать только число больше 0.
    // if (a === 0) и if (a < 0) можно было бы объединить в if (a <= 0) или if (a < 1)
  }
  if (typeof a === "number") {
    let div = new Array();
    for (let index = 1; index <= a; index++) {
      if (a % index === 0) {
        div.push(index);
      }
    }
    return div;
  } else {
    throw new Error("parameter type is not a Number");
  }
}

// console.log(getDivisors(12));
// console.log(getDivisors('Content'));
// console.log(getDivisors(0));

// Используем try - catch, иначе программа остановится после функции getDivisors('Content')

try {
  console.log(getDivisors(12));
} catch (e) {
  console.log("Error: " + e.message);
}

try {
  console.log(getDivisors("Content"));
} catch (e) {
  console.log("Error: " + e.message);
}

try {
  console.log(getDivisors(0));
} catch (e) {
  console.log("Error: " + e.message);
}

try {
  console.log(getDivisors(-10));
} catch (e) {
  console.log("Error: " + e.message);
}

// Результат

// [ 1, 2, 3, 4, 6, 12 ]
// Error: parameter type is not a Number
// Error: parameter can't be a 0
// Error: parameter should be bigger then 0
