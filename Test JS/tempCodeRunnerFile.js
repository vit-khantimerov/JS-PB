let user = {
  name: "Джон",
  age: 30
};

user.sayHi = function us() {
    console.log("Привет!");
};

user.sayHi(); // Привет!
console.log(user); // { name: 'Джон', age: 30, sayHi: [Function: us] }
console.log(user.sayHi.console);