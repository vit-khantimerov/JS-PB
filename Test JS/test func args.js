/*** остаточные параметры ф-ции ...х **********************/
function showName(firstName, lastName, ...titles) {
  console.log(firstName + " " + lastName); // Юлий Цезарь

  // Оставшиеся параметры пойдут в массив
  // titles = ["Консул", "Император"]
  console.log(titles[0]); // Консул
  console.log(titles[1]); // Император
  console.log(titles.length); // 2
  console.log("arguments list:");
  for (let item of arguments) {
    console.log(item);
  }
  console.log("***");

  /*
arguments:
Юлий      
Цезарь    
Консул    
Император 
*/
  console.log("arguments:", arguments);
  /*
arguments: [Arguments] {
  '0': 'Юлий',
  '1': 'Цезарь',
  '2': 'Консул',
  '3': 'Император'
}
*/
  console.log("titles:", titles); // titles: [ 'Консул', 'Император' ]
  console.log(typeof arguments); // object
  console.log(Array.isArray(arguments)); // false
  console.log(Array.isArray(titles)); // true
}

showName("Юлий", "Цезарь", "Консул", "Император");

/*** оператор расширения ...x **********************/
console.log("\n***********************************\n");
let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr2];
console.log(merged, "\nis merged an array?", Array.isArray(merged));
// [0, 3, 5,  1, 2, 8, 9, 15]
// is merged an array? true

console.log("\n***********************************\n");

let str = "Привет";
console.log([...str]); // [ 'П', 'р', 'и', 'в', 'е', 'т' ]

for (const item of str) {
  console.log(item);
}
/*
П
р
и
в
е
т
*/
console.log("\n***********************************\n");

for (const item of [...str]) {
  console.log(item);
}
/*
П
р
и
в
е
т
*/

console.log("\n***********************************\n");

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

function byField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}

users.sort(byField("name"));
users.forEach((user) => console.log(user.name)); // Ann, John, Pete
console.log("***");
users.sort(byField("age"));
users.forEach((user) => console.log(user.name)); // Pete, Ann, John

console.log("\n***********************************\n");

function sayHi0() {
  phrase0 = "Привет, Hi0!"; // (*)

  if (false) {
    var phrase0;
  }
  console.log(phrase0);
}
console.log("sayHi0()");
sayHi0();

console.log("\n***********************************\n");

function sayHi() {
  var phrase;
  phrase = "Привет 1";
  function sayHi2() {
    var phrase2;
    phrase2 = "Привет 2";
  }
}
// console.log(phrase); // ReferenceError: phrase is not defined
// console.log(phrase2); // ReferenceError: phrase2 is not defined

// console.log("***************************************\n");
// ("use strict");

// if (!window.Promise) {
//   // ReferenceError: window is not defined
//   console.log("Ваш браузер очень старый!");
// } else {
//   console.log("Ваш браузер ne старый!");
// }
console.log("\n***********************************\n");

console.log(globalThis); // <ref *1> Object [global] {...}
globalThis.x = { yyy: "xxx" };
console.log(globalThis.x); // { yyy: 'xxx' }

