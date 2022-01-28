console.log("---for---");
let a = [1, 2, 3];
a[10] = 10;
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}
console.log();

/*************************/
console.log("---for of---");
for (const iterator of a) {
  console.log(iterator);
}
console.log();

/*************************/
console.log("---for in---"); // выводит без undefined
for (let key in a) {
  console.log(a[key]);
}
