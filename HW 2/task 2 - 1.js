/* ДЗ 2. Задача 1

Напишите функцию `f`, которая возвращает куб числа. 
Число передается параметром. 
Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.

```js
f(2); // 8
f('Content'); // Error: parameter type is not a Number
*/



//  Решение

function f(a) {
    if (typeof a === 'number') {
        return a * a * a;
    } else {
        throw new Error('parameter type is not a Number');
    }
}

console.log(f(8));
console.log(f('Content'));

// Результат

// 512
// Error: parameter type is not a Number
