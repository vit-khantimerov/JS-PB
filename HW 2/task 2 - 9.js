/* ДЗ 2. Задача 9.

function solution(a, b) {
    //....
    return [];
}

console.log(solution([2, 4, 3], [5, 6, 4])); // [8, 0, 7]
console.log(solution([1, 4, 5], [4, 4, 2])); // [5, 8, 7]
console.log(solution([1, 1, 1], [])); // [1, 1, 1]
console.log(solution([], [9, 9, 9])); // [9, 9, 9]
console.log(solution([9,9,9], [9,9,9])); // [1, 9, 9, 8]
console.log(solution([], [])); // []
console.log(solution([], [0])); // [0]
console.log(solution([0], [0])); // [0]
console.log(solution([1,1,1,1,1,1,1,1], [1, 0])); // [1, 1, 1, 1, 1, 1, 2, 1]
console.log(solution([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],[1]));
// // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
*/

//  Решение

function solution(a, b) {
  // console.log('array 1 : ' + a);
  // console.log('array 2 : ' + b);

  // Определяем длинный массив как базу для итога.
  let length;
  let long = new Array();
  let short = new Array();

  if (a.length >= b.length) {
    length = a.length;
    long = a.reverse(); // реверс массива для удобства итерраций
    short = b.reverse();
  } else {
    length = b.length;
    long = b.reverse();
    short = a.reverse();
  }

  let ten = 0; // =1 при сумме >= 10 (переходящая единица)

  for (let i = 0, sum; i < length; i++) {
    long[i] += ten; // добавляем переходящую единицу
    if (typeof short[i] === "number") {
      sum = long[i] + short[i];
    } else {
      sum = long[i]; // если короткий массив закончился, то его больше не суммируем
    }
    if (sum >= 10) {
      ten = 1;
      sum = sum % 10; // отсекаем десятки
    } else {
      ten = 0;
    }

    long[i] = sum;
    sum = 0;
  }

  if (ten === 1) {
    long[length] = 1; // добавляем новый элемент (1) в конец длинного массива,
    // если сумма первых разрядов >= 10
  }

  let itog = new Array();
  itog = long.reverse();

  // console.log('result  : ' + itog + '\n');
  return itog;
}

console.log(solution([2, 4, 3], [5, 6, 4])); // [8, 0, 7]
console.log(solution([1, 4, 5], [4, 4, 2])); // [5, 8, 7]
console.log(solution([1, 1, 1], [])); // [1, 1, 1]
console.log(solution([], [9, 9, 9])); // [9, 9, 9]
console.log(solution([9, 9, 9], [9, 9, 9])); // [1, 9, 9, 8]
console.log(solution([], [])); // []
console.log(solution([], [0])); // [0]
console.log(solution([0], [0])); // [0]
console.log(solution([1, 1, 1, 1, 1, 1, 1, 1], [1, 0])); // [1, 1, 1, 1, 1, 1, 2, 1]
console.log(
  solution(
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [1]
  )
);
// [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Мои результаты = результатам в условии.

// [ 8, 0, 7 ]
// [ 5, 8, 7 ]
// [ 1, 1, 1 ]
// [ 9, 9, 9 ]
// [ 1, 9, 9, 8 ]
// []
// [ 0 ]
// [ 0 ]
// [ 1, 1, 1, 1, 1, 1, 2, 1 ]
// [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]

/////// Еще несколько тестовых примеров.

// console.log(solution(ar1, ar2));
// array 1 : 0,0,0,5,4,3,9
// array 2 : 0,0,0,8,7,6,9
// result  : 0,0,1,4,2,0,8

// console.log(solution(ar3, ar4));
// array 1 :   9,9,9,9,9,9
// array 2 :       1,0,0,1
// result  : 1,0,0,1,0,0,0

// console.log(solution(ar5, ar6));
// array 1 : 9,2,3,7
// array 2 :   4,5,6
// result  : 9,6,9,3

// console.log(solution(ar7, ar8));
// array 1 : 1,2,3
// array 2 : 1,1,1
// result  : 2,3,4

// console.log(solution(ar9, ar10));
// array 1 : 0,0,0,0,0
// array 2 :         1
// result  : 0,0,0,0,1
