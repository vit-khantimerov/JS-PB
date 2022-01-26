console.clear(); // not works out of terminal

[1, 2].forEach(console.log);
console.log("██");

let num = 255;

console.log(num.toString(16)); // ff
console.log(num.toString(2)); // 11111111
console.log(num.toString()); //10  // 11111111
console.log(num.toString(35)); // 11111111
console.log(9999999999999999999n + 9999999999999999999n);
console.log(100);
console.log("100");
console.log(1 / -0);
console.log(parseInt("100px00"));
console.log("\t" + "abcde" + "\b, \f, \v" + "aaaaaa"); //         abcd, ♀, ♂aaaaaa
console.log(`1a
2b
3c`);
console.log(`summ = ${num + num}\nmulti = ${num * num}`);
console.log(console.log());
console.log();

/* Is NULL > or < 0 ? *****************/
let x = null;
if (x <= 0 && x >= 0) {
  console.log("x <= 0 && x >= 0 !!! Серьезно ???");
} else {
  console.log("Что вы там курите?");
}

/*************************/
[0, 1, 2, 3, 4, 5, 6, 7].forEach((element) => {
  if (element > 5) console.log(element);
});
