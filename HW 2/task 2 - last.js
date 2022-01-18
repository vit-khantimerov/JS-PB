/* ДЗ 2. Задача *.

Сложение в столбик.

*/

// Решение.

// считаем, что массивы состоят только из цифр

var ar1 = [0, 0, 0, 5, 4, 3, 9];
var ar2 = [0, 0, 0, 8, 7, 6, 9];

var ar3 = [9, 9, 9, 9, 9, 9];
var ar4 = [1, 0, 0, 1];

var ar5 = [9, 2, 3, 7];
var ar6 = [4, 5, 6];

var ar7 = [1, 2, 3];
var ar8 = [1, 1, 1];

var ar9 = [0, 0, 0, 0, 0];
var ar10 = [1];


function summ (arr1, arr2){
    console.log('array 1 : ' + arr1);
    console.log('array 2 : ' + arr2);


// Определяем длинный массив как базу для итога.
    var length;
    var long = new Array;
    var short = new Array;


    if (arr1.length >= arr2.length) {
        length = arr1.length;
        long = arr1.reverse(); // реверс массива для удобства итерраций
        short = arr2.reverse();
    } else {
        length = arr2.length;
        long = arr2.reverse();
        short = arr1.reverse();
    }

    var ten = 0; // =1 при сумме >= 10 (переходящая единица)

    for (let i = 0, sum; i < length; i++) {
        long[i] += ten; // добавляем переходящую единицу
        if (typeof(short[i]) === "number") { 
        // if (short[i] != undefined) {
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

    if (ten == 1) {
        long[length] = 1; // добавляем новый элемент (1) в конец длинного массива, 
                          // если сумма первых разрядов >= 10 
    }

    var itog = new Array;
    itog = long.reverse();

    console.log('result  : ' + itog + '\n');
}

summ(ar1, ar2);
// array 1 : 0,0,0,5,4,3,9
// array 2 : 0,0,0,8,7,6,9
// result  : 0,0,1,4,2,0,8

summ(ar3, ar4);
// array 1 :   9,9,9,9,9,9
// array 2 :       1,0,0,1
// result  : 1,0,0,1,0,0,0

summ(ar5, ar6);
// array 1 : 9,2,3,7
// array 2 :   4,5,6
// result  : 9,6,9,3

summ(ar7, ar8);
// array 1 : 1,2,3
// array 2 : 1,1,1
// result  : 2,3,4

summ(ar9, ar10);
// array 1 : 0,0,0,0,0
// array 2 :         1
// result  : 0,0,0,0,1
