/* ДЗ 1. Задача 7

Написать код который посчитает сумму всех парных элементов в масиве.

```js
var arr = [1,2,3,4];
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.
*/

//  Решение
var arr = [1,2,3,4];
var sum = 0;

for (let i in arr) {
  if (arr[i] % 2 == 0) {
    sum += arr[i]
  }
}

console.log(sum);  // Результат:  6

