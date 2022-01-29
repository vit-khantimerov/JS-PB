/*Урок 9. Задача 9

Сделайте функцию `arrayFill`, 
    которая будет заполнять массив заданными значениями. 
    Первым параметром функция принимает значение, 
    которым заполнять массив, 
    а вторым — сколько элементов должно быть в массиве.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только число, 
    строку, объект, массив
- Второй параметр обязателен и может принимать только число

```javascript
arrayFill('x',5); // [x,x,x,x,x]
```
*/

// Решение
const RED = "\x1B[31m";
const RESET = "\x1b[0m";
const N = "\n";
console.log();

function arrayFill(val, n) {
  if (
    typeof val !== "number" &&
    typeof val !== "string" &&
    typeof val !== "object" &&
    !Array.isArray(val)
  ) {
    throw new Error(
      RED +
        "Error: first parameter should be a nunber or string or objact or array" +
        RESET +
        N
    );
  }
  if (typeof n !== "number") {
    throw new Error(
      RED + "Error: secons parameter type should be a number" + RESET + N
    );
  }

  if (n === Infinity) {
    throw new Error(
      RED + "Error: expect Fatal JavaScript invalid size error" + RESET + N
    );
  }
  var array = new Array();
  for (let i = 0; i < n; i++) {
    array[i] = val;
  }
  return array;
}

/*************************/

console.log(arrayFill("x", 5)); // [ 'x', 'x', 'x', 'x', 'x' ]
console.log();

let arr = [
  ["x", 5], //                  [ 'x', 'x', 'x', 'x', 'x' ]
  [0, 4], //                    [ 0, 0, 0, 0 ]
  [["x", "y", "z"], 3], //      [ [ 'x', 'y', 'z' ], [ 'x', 'y', 'z' ], [ 'x', 'y', 'z' ] ]
  [{ name: "Vit", age: 49 }, 2], // [ { name: 'Vit', age: 49 }, { name: 'Vit', age: 49 } ]
  [Infinity, 3], //             [ Infinity, Infinity, Infinity ]
  [null, 3], //                 [ null, null, null ]
  [1000n, 3], //                Error: first parameter should be a nunber or string or objact or at or array
  [100, "3"], //                Error: secons parameter type should be a number
  [, 3], //                     Error: first parameter should be a nunber or string or objact or at or array
  [undefined, 5], //            Error: first parameter should be a nunber or string or objact or at or array
  ["set"], //                   Error: secons parameter type should be a number
  ["", 5], //                   [ '', '', '', '', '' ]
  [1, 10n], //                  Error: secons parameter type should be a number
  [1, Infinity], //             Error: expect Fatal JavaScript invalid size error
];

for (let i in arr) {
  try {
    console.log("arrayFill(", arr[i], ") >> ");
    console.log(arrayFill(arr[i][0], arr[i][1]), N);
  } catch (error) {
    console.log(error.message);
  }
}

/*****  Результат  *****
PS C:\HTML+\JS PB> node "c:\HTML+\JS PB\Lesson 4\task 4 - 9.js"

[ 'x', 'x', 'x', 'x', 'x' ] 

arrayFill( [ 'x', 5 ] ) >>  
[ 'x', 'x', 'x', 'x', 'x' ]

arrayFill( [ 0, 4 ] ) >>
[ 0, 0, 0, 0 ]

arrayFill( [ [ 'x', 'y', 'z' ], 3 ] ) >>
[ [ 'x', 'y', 'z' ], [ 'x', 'y', 'z' ], [ 'x', 'y', 'z' ] ] 

arrayFill( [ { name: 'Vit', age: 49 }, 2 ] ) >>
[ { name: 'Vit', age: 49 }, { name: 'Vit', age: 49 } ]      

arrayFill( [ Infinity, 3 ] ) >>
[ Infinity, Infinity, Infinity ]

arrayFill( [ null, 3 ] ) >>
[ null, null, null ]

arrayFill( [ 1000n, 3 ] ) >>
Error: first parameter should be a nunber or string or objact or array

arrayFill( [ 100, '3' ] ) >>
Error: secons parameter type should be a number

arrayFill( [ <1 empty item>, 3 ] ) >>
Error: first parameter should be a nunber or string or objact or array

arrayFill( [ undefined, 5 ] ) >>
Error: first parameter should be a nunber or string or objact or array

arrayFill( [ 'set' ] ) >>
Error: secons parameter type should be a number

arrayFill( [ '', 5 ] ) >>
[ '', '', '', '', '' ]

arrayFill( [ 1, 10n ] ) >>
Error: secons parameter type should be a number

arrayFill( [ 1, Infinity ] ) >>
Error: expect Fatal JavaScript invalid size error

*/
