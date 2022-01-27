/*Урок 4. Задача 10
Создать имплементацию функции `reverse`, 
    которая принимает массив в качестве параметра, 
    а возвращает массив только в обратном порядке.

Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если был передан пустой массив

```javascript
const arr = [3,2,1];
reverse(arr); // [1,2,3]
```
*/

// Решение

function reverse(a) {
  if (Array.isArray(a)) {
    if (a.length === 0) {
      throw new Error(`reverse([${a}]) >> Error: parameter can't be an empty`);
    }
    let tmp = new Array();
    let a0 = a;
    for (let i = 0; i < a.length; i++) {
      tmp[i] = a[a.length - i - 1];
    }
    a = tmp;
    console.log("reverse(", a0, ") >> ", a);
    return a;
  } else {
    throw new Error(
      `reverse(${a}) >> Error: parameter type should be an array`
    );
  }
}

try {
  const arr = [3, 2, 1];
  reverse(arr); //  [ 1, 2, 3 ]
} catch (e) {
  console.log(e.message);
}

let a;

try {
  a = [0];
  reverse(a); // [0]
} catch (e) {
  console.log(e.message);
}

try {
  a = ["a", "b", "c"];
  reverse(a); // [ 'c', 'b', 'a' ]
} catch (e) {
  console.log(e.message);
}

try {
  a = [];
  reverse(a); // Error: parameter can't be an empty
} catch (e) {
  console.log(e.message);
}

try {
  a = 0;
  reverse(a); // Error: parameter type should be an array
} catch (e) {
  console.log(e.message);
}

try {
  a = "s";
  reverse(a); // Error: parameter type should be an array
} catch (e) {
  console.log(e.message);
}

try {
  a = {};
  reverse(a); // Error: parameter type should be an array
} catch (e) {
  console.log(e.message);
}

/*****  Результат  *****

reverse( [ 3, 2, 1 ] ) >>  [ 1, 2, 3 ]
reverse( [ 1, 2, 3, 4, 5, 6, 7 ] ) >>  [ 7, 6, 5, 4, 3, 2, 1 ]
reverse( [ 0 ] ) >>  [ 0 ]
reverse( [ 'a', 'b', 'c' ] ) >>  [ 'c', 'b', 'a' ]
reverse([]) >> Error: parameter can't be an empty
reverse(0) >> Error: parameter type should be an array
reverse(s) >> Error: parameter type should be an array
reverse([object Object]) >> Error: parameter type should be an array

[Done] exited with code=0 in 0.355 seconds
*/
