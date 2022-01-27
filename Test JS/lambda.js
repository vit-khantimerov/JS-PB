let ff = () => "Hello Lambda!";
console.log(ff()); // Hello Lambda!

/************************/
let sayHi = () => console.log("Hello lambda!");
sayHi(); // Hello lambda!

/************************/
sayHi = (s, t) => console.log(s, t);
sayHi("Hello", "lambda!"); // Hello lambda!

sayHi(); // undefined undefined
sayHi(123); // 123 undefined
sayHi("1", "+ 2 = 3"); // 1 + 2 = 3

/************************/
let sum = (a, b) => a + b; //  f(a,b){a+b}
console.log(sum(100, 11)); // 111

/************************/
let cube = a => a ** 3;  // = (a) => a ** 3;
console.log(cube(3)); // 27

/************************/
let fun = (a, b) => {
  console.log(a * b);
  console.log(a / b);
  console.log(a - b);
  return a + b;
};
console.log(fun(100, 7));
// 700
// 14.285714285714286
// 93
// 107

/************************/
let age = 10,
  x = 18;

let welcome =
  age < x ? () => console.log("Привет") : () => console.log("Здравствуйте!");

welcome();
age = 20;
welcome();
