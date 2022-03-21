/* ДЗ 1. Задача 10

Отсортировать массив по возрастанию.

```javascript
var arr = [6,5,4,3,2,1];
// [1,2,3,4,5,6]
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.
*/


//  Решение
var arr = [6,5,4,3,2,1];
var count, tmp;

do { 
  count = 0;
  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] > arr[i+1])
      {
        tmp = arr[i];		//перестановка элементов массива
        arr[i] = arr[i+1];
        arr[i+1] = tmp;
        count++;
      }
  }
}
while (count > 0);

console.log(arr); // Результат:  [ 1, 2, 3, 4, 5, 6 ]
