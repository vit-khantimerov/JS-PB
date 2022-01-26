/************************/
let sayHi = () => console.log("Hello lambda!");
sayHi();           // Hello lambda!

/************************/
let sum = (a, b) => a + b; //  f(a,b){a+b}
console.log(sum(100,11)); // 111

/************************/
let cube = a => a ** 3;
console.log( cube(3) ); // 27

/************************/
let fun = (a, b) => {
    console.log(a * b);
    console.log(a / b);
    console.log(a - b);
    return a + b;
}
console.log(fun(100, 7));
// 700
// 14.285714285714286
// 93
// 107

/************************/
let age = 10, x = 18;

let welcome = (age < x) ?
  () => console.log('Привет') :
  () => console.log("Здравствуйте!");

welcome();
age = 20;
welcome();

// he080372kvg@HEA0-797206:~/JS-PB$ node "/home/HE080372KVG/JS-PB/Test JS/tempCodeRunnerFile.js"
// Привет
// Привет // хм