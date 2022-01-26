console.clear(); // not works out of terminal

[1, 2, 3, 110].forEach(console.log);
// 1 0 [ 1, 2, 3, 110 ]
// 2 1 [ 1, 2, 3, 110 ]
// 3 2 [ 1, 2, 3, 110 ]
// 110 3 [ 1, 2, 3, 110 ]

[3, 5, 7].forEach((val, ind, arr) => {
    console.log('val=', val);
    console.log('ind=', ind);
    console.log('arr=', arr);
})
/*
val= 3
ind= 0
arr= [ 3, 5, 7 ]
val= 5
ind= 1
arr= [ 3, 5, 7 ]
val= 7
ind= 2
arr= [ 3, 5, 7 ]
*/




console.log('\"██\" >> ' + "██");

let num = 255;

console.log('num.toString(16) >> ${num.toString(16)}'); // ff
console.log('num.toString(2) >> ${num.toString(2)}'); // 11111111
console.log(num.toString()); //10  // 11111111
console.log(num.toString(35)); // 11111111
console.log(9999999999999999999n + 9999999999999999999n);
console.log(100);
console.log("100");
console.log('1 / -0${1 / -0}');
console.log(parseInt("100px00"));
console.log("\t" + "abcde" + "\b, \f, \v" + "aaaaaa"); //         abcd, ♀, ♂aaaaaa
console.log(`1a
2b
3c`);
console.log(`summ = ${num + num}\nmulti = ${num * num}`);
console.log(console.log());
console.log('1\v2\t3');
console.log('1234568790\n\b111');  // \b не работает

/************************/
console.log( undefined > 0 ); // false (1)
console.log( undefined < 0 ); // false (2)
console.log( undefined == 0 ); // false (3)
console.log( undefined >= 0 ); // false (4)
console.log( null > 0 ); // false
console.log( null < 0 ); // false
console.log( null == 0 ); // false
console.log( null >= 0 ); // true
console.log( null <= 0 ); // true

/************************/
(true) ? console.log('Верно!') : console.log('Неправильно.'); // Верно!

/************************/  // в VS CODE не работает
let firstName = null;
let lastName;
let nickName = "Суперкодер";
// показывает первое определённое значение:
console.log(firstName ?? lastName ?? nickName ?? "Аноним"); // Суперкодер
// показывает первое истинное значение:
console.log(firstName || lastName || nickName || "Аноним"); // Суперкодер