/* ДЗ 2. Задача 111.

*/

// Решение.

var arr1 = [5, 4, 3, 9, 9, 9, 9];
var arr2 = [8, 7, 6];
var rev1 = new Array;
var rev2 = new Array;
rev1 = arr1.reverse();
rev2 = arr2.reverse();
var legnth;
var long = new Array;
var short = new Array;
var arrResult = new Array;
// arrResult = 0;

// console.log(rev1 + '\n' + rev2);

if (arr1.length >= arr2.length) {
    legnth = arr1.length;
    long = arr1;
    short = arr2;
} else {
    legnth = arr2.length;
    long = arr2;
    short = arr1;
}

// console.log(long);
// console.log(short);

var ten = 0;

for (let i = 0, sum; i < legnth; i++) {
    arrResult[i] = ten;
    ten = 0;
    console.log('res[' + i + ']=' + arrResult[i]);
    if (short[i] != undefined) {
        sum = long[i] + short[i];
    } else {
        sum = long[i] + arrResult[i];
    }
    if (sum >= 10) {
        ten = 1;
        sum = sum % 10;
    } else {
        ten = 0;
        // sum = sum % 10;
    }

    console.log('sum=' + sum + ' ten=' + ten);
    
    arrResult[i] += sum;
    arrResult[i + 1] = ten;
    console.log('res[' + i + ']=' + arrResult[i]);

    sum = 0;
    // ten = 0;
}

console.log(arrResult);