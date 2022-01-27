/* Урок 4. Задача 1

Создать имплементацию функции `forEach`, 
    логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
forEach(arr, function(item, i, arr) {});
```
*/


// Решение

function forEach(arr, f) {
    if (!Array.isArray(arr)) {
        throw new Error('Error: parameter 1 type should be an array');
    }
    if (typeof(f) !== 'function') {
        throw new Error('Error: parameter 2 type should be a function');
    }
    for (let i = 0; i < arr.length; i++) {
        // console.log(i);
        
        f(arr[i], i, arr);     
    }
}

function clg(item, i, arr) {
    console.log(`item = ${item}, i = ${i}, arr = ${arr}`);
}

function f2(item, i, arr) {
    console.log(item * 2);
}

function f3(item, i, arr) {
    console.log(item, typeof(item));
}

let aaa = [1,2,3,4,5];
forEach(aaa, clg);

console.log(forEach(aaa, f2));
console.log(forEach([1,2,3], f3));

forEach([1, 2, 3, 's'], function f4(item, i, arr) {
    console.log(item * 10, i * 10, arr);
});


aaa.forEach(f2);

forEach([0], clg);
console.log(forEach([0], f3));

console.log(forEach([0], 0));



// Результат

// 