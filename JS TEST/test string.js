let str = "Ослик иа-иа посмотрел на виадук";
let target = "иа"; // цель поиска
let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;
  console.log(`Найдено тут: ${foundPos}`);
  pos = foundPos + 1; // продолжаем со следующей позиции
}
// [Running] node "c:\HTML+\JS PB\Test JS\test string.js"
// Найдено тут: 6
// Найдено тут: 9
// Найдено тут: 26

// [Done] exited with code=0 in 3.677 seconds

/********************************** */
let str = "Ослик иа-иа посмотрел на виадук";
let target = "иа";
let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  console.log(pos);
}
// 6
// 9
// 26

/***************************** */
let str = "Widget with id";
if (str.indexOf("Widget") >= 0) {
  // alert("Совпадение есть"); // не работает >> (...) == 0 == false
  console.log("Совпадение есть"); // Совпадение есть
}

/************************** */
/*Трюк с использованием побитового оператора НЕ — ~. 
  Он преобразует число в 32-разрядное целое со знаком (signed 32-bit integer). 
  Дробная часть, в случае, если она присутствует, отбрасывается. Затем все биты числа инвертируются.
  На практике это означает простую вещь: для 32-разрядных целых чисел значение ~n равно -(n+1).
*/
let str = "Widget";
if (~str.indexOf("Widget")) {
  console.log("Совпадение есть"); // работает
}

/*********************************** */
for (let index = 65; index < 65 + 26; index++) {
  console.log(String.fromCodePoint(index));
}
// [Running] node "c:\HTML+\JS PB\Test JS\tempCodeRunnerFile.js"
// A
// B
// ...
// X
// Y
// Z

// [Done] exited with code=0 in 4.339 seconds

/****************** */
let str = "";
for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
console.log(str);
// [Running] node "c:\HTML+\JS PB\Test JS\tempCodeRunnerFile.js"
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

// [Done] exited with code=0 in 5.66 seconds

/**************** */
console.log("S\u0307\u0323"); // Ṩ
console.log("S\u0307\u0323".normalize() == "\u1e68"); // true

/************ */
console.log("string¯".repeat(4)); // string¯string¯string¯string¯

/********* */
console.log('\0');

/********** */
console.log(typeof console.log('1000'));
// unning] node "c:\HTML+\JS PB\Test JS\tempCodeRunnerFile.js"
// 1000
// undefined

// [Done] exited with code=0 in 0.25 seconds