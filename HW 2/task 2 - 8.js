/* ДЗ 2. Задача 8

Дан массив с числами `[1, 2, 3]`. 
Создайте функцию `f`, которая принимает данный массив в качестве параметров, 
    а затем последовательно выводит на экран его элементы. 
    Обязательно нужно использовать рекурсию. 
    Использовать цикл запрещено. 
Данная функция должна обьязательно содержать проверку входного параметра, 
    потому что принимать она может только не пустой массив.

*Возможно вам понадобится метод [splice]
(https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).*

```js
f([1,2,3]);
// 1
// 2
// 3
f(1,2,3) // Error: parameter type should be an array
f('Content') // Error: parameter type should be an array
f([]) // Error: parameter can't be an empty
*/



//  Решение

var f = function(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('parameter type should be an array');
    }
    if (arr.length == 0) {
        throw new Error('parameter can\'t be an empty')
    }
    console.log(arr.shift());
    if (arr.length > 0) f(arr);
}

// try {
    f([1,2,3]);
    f(1,2,3);
    f('Content');
    f([]);
// } catch (e) {
//     console.log('Error: ' + e.message);
// }


// Результат

