/*
Приоритет	Название	Обозначение
…	…	…
17	унарный плюс	+
17	унарный минус	-
16	возведение в степень	**
15	умножение	*
15	деление	/
13	сложение	+
13	вычитание	-
…	…	…
3	присваивание	=
…	…	…
*/

console.log(6 - 1 + "2");
console.log(6 - 1 - "2");

// Running] node "c:\HTML+\JS PB\Test JS\test operators.js"
// 52 << 5 +'2'
// 3

// [Done] exited with code=0 in 0.275 seconds

/********* */
let apples = "2";
let oranges = "3";

// оба операнда предварительно преобразованы в числа
console.log(+apples + +oranges); // 5

/*********** */
let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
console.log(a); // 3
console.log(c); // 0

/*************************/