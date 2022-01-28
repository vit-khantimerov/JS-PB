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



let f = function(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('parameter type should be an array')
    }
    return arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            return acc + f(item)
        } else {
            if (typeof(item) !== 'number') {
                throw new Error('element should be a number')
            }
            return acc + item
        }
    },0)
}


const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(f(arr)); // 12
const arr2 = [[[[[1,2]]]]];
console.log(f(arr2)); // 3
const arr3 = [[[[[1,2]]],2],1];
console.log(f(arr3)); // 6
const arr4 = [[[[[]]]]];
console.log(f(arr4)); // 0
const arr5 = [[[[[],3]]]];
console.log(f(arr5)); // 3

console.log(f([1,2,3,'n',4])); // error
console.log(f([[[[[],3]],'n']])); // error
console.log(f(1,0,10)); // error




/*****  Результат  *****







*/ 