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
        // throw new Error(`reverse(${a}) >> Error: parameter can't be an empty`);
        throw new Error(`reverse([${a}]) >> Error: parameter can't be an empty`);
      }
      let tmp = new Array;
      let a0 = a;
      for (let i = 0; i < a.length; i++) {
        tmp[i] = a[a.length-i-1];
      }
      a = tmp;
      console.log('reverse(', a0 , ') >> ', a);
      return a;
    //   console.log(a);
    } else {
      throw new Error(`reverse(${a}) >> Error: parameter type should be an array`);
    //   throw new Error('reverse(', a , ') >>', 'Error: parameter type should be an array');
    }
}


try {
    const arr = [3,2,1];
    reverse(arr);
    // console.log('reverse', arr , '>>', reverse(arr));
} catch (e) {
    console.log(e.message);
}

var a;

try {
    a = [0];
    reverse(a);
    // console.log(`reverse(${a}) >> ${reverse(a)}`);
  } catch (e) {
    // console.log(`reverse(${a}) >> Error: ${e.message}`);
    console.log(e.message);
  }


try {
    a = ['a','b','c'];
    reverse(a);
    // console.log(`reverse(${a}) >> ${reverse(a)}`);
  } catch (e) {
    // console.log(`reverse(${a}) >> Error: ${e.message}`);
    console.log(e.message);
  }

  try {
    a = [];
    reverse(a);
    // console.log(`reverse(${a}) >> ${reverse(a)}`);
  } catch (e) {
    // console.log(`reverse(${a}) >> Error: ${e.message}`);
    console.log(e.message);
  }

  try {
    a = 0;
    reverse(a);
    // console.log(`reverse(${a}) >> ${reverse(a)}`);
  } catch (e) {
    // console.log(`reverse(${a}) >> Error: ${e.message}`);
    console.log(e.message);
  }

  try {
    a = 's';
    reverse(a);
    // console.log(`reverse(${a}) >> ${reverse(a)}`);
  } catch (e) {
    // console.log(`reverse(${a}) >> Error: ${e.message}`);
    console.log(e.message);
  }

  try {
    a = {};
    reverse(a);
    // console.log(`reverse(${a}) >> ${reverse(a)}`);
  } catch (e) {
    console.log(e.message);
  }

// Результат

// reverse( [ 3, 2, 1 ] ) >>  [ 1, 2, 3 ]
// reverse( [ 0 ] ) >>  [ 0 ]
// reverse( [ 'a', 'b', 'c' ] ) >>  [ 'c', 'b', 'a' ]
// reverse([]) >> Error: parameter can't be an empty
// reverse(0) >> Error: parameter type should be an array
// reverse(s) >> Error: parameter type should be an array
// reverse([object Object]) >> Error: parameter type should be an array




/************************/

// try {
//   reverse(0);
// } catch (e) {
//   console.log('reverse(0) >> ' + 'Error: ' + e.message);
// }

// try {
//     reverse();
//   } catch (e) {
//     console.log('reverse() >> ' + 'Error: ' + e.message);
//   }
  

// function tryFunc(f) {
//     try {
//         // let F = f;
//         f;
//         // console.log(arguments[0]);
//       } catch (e) {
//         console.log('reverse(0) >> ' + 'Error: ' + e.message);
//       }    
// }
//
// tryFunc(reverse([1,2]));
// tryFunc(reverse('o'));
// tryFunc(reverse([]));
// tryFunc(reverse(a));
