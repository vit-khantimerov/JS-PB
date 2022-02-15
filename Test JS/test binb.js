// Привязка контекста к функции
// https://learn.javascript.ru/bind#chastichnoe-primenenie-bez-konteksta

function partial(func, ...argsBound) {
  return function (...args) {
    // (*)
    return func.call(this, ...argsBound, ...args);
  };
}

// использование:
let user = {
  firstName: "John",
  say(time, phrase) {
    console.log(`[${time}] ${this.firstName}: ${phrase}!`);
  },
};

// добавляем частично применённый метод с фиксированным временем
user.sayNow = partial(
  user.say,
  new Date().getHours() + ":" + new Date().getMinutes()
);

user.sayNow("Hello");
// Что-то вроде этого:
// [10:00] John: Hello!

console.log("\n***********************************\n");
console.log(
  new Date().toLocaleDateString() +
    ", " +
    new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds()
);
// 11.02.2022, 15:19:42

console.log("\n***********************************\n");
function sayHi() {
  console.log(this.name);
}
sayHi.test = 5;
console.log(sayHi); // [Function: sayHi] { test: 5 }


console.log('\n***********************************\n');
/***тест принт объект**********************/
let user = {
  name: "Джон",
  age: 30
};

user.sayHi = function us() {
    console.log("Привет!");
};

user.sayHi(); // Привет!
console.log(user); // { name: 'Джон', age: 30, sayHi: [Function: us] }

