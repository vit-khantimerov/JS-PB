

var a = 1, b = 2, c = 3, d = 4;

//result = (a + b < 4) ? (c = 0) (d = 0) : (c = 0) (d = 0);
/*
result = (a + b < 4) ? (c = 0) (d = 0) : (c = 0) (d = 0);
                               ^

TypeError: (intermediate value)(intermediate value) is not a function
*/
console.log(c + ' ' + d);

console.log();

