console.log("\n*** setTimeout и setInterval ***\n");

setTimeout(() => console.log("Привет 1000 !!!!!!!!!!!!!"), 1000);

// повторить с интервалом 2 секунды
let t = 0;
let timerId = setInterval(() => console.log("tik-tak, tik-tak"), 1000);
console.log("timerId._idleTimeout =", timerId._idleTimeout);
// console.log(timerId);
// остановить вывод через 10 секунд
setTimeout(() => {
  clearInterval(timerId);
  console.log("\n*** Real end of Timer tik-tak **************************\n");
}, 5000);

// setTimeout(() => {
//   while (timerId._idleTimeout > 0) {
//     // console.log(timerId._idleTimeout);
//     // setTimeout(() => (t += 500), 500);
//     // t++;
//     // console.log(t);
//   }
//   console.log("end while");
// }, 1000);

setTimeout(() => (t += 500), 500);
setTimeout(() => (t += 500), 500);
setTimeout(() => console.log("t ==============", (t += 500)), 500);

// setTimeout(() => console.log("tId", timerId._idleTimeout), 10000);
console.log("\n*** END of Timer tik-tak  **************************\n");

console.log("\n*** Start many timers ********************************\n");

function timer(name) {
  for (let index = 0; index < 3; index++) {
    setTimeout(() => 1 + 1, 5);
    console.log(name + "+" + index);
  }
}

let tId0 = setInterval(timer, 250, "\x1B[32mt 250");
let tId1 = setInterval(timer, 250, "\x1B[35mt 250");
let tId2 = setInterval(timer, 500, "\x1B[36mt 500");
let tId3 = setInterval(timer, 1000, "\x1B[33mt 1000");
let tId4 = setInterval(timer, 1500, "\x1B[34mt 1500");

setTimeout(() => {
  clearInterval(tId0);
  clearInterval(tId1);
  clearInterval(tId2);
  clearInterval(tId3);
  clearInterval(tId4);
  console.log("\n*** End of many timers ********************************\n");
}, 10000);
console.log("\x1b[0m");
/* 
t 250+0
t 250+1
t 250+2
t 250+0
t 250+1
t 250+2
t ============== 1500
t 500+0
t 500+1
t 500+2
t 250+0
t 250+1
t 250+2
*/

console.log("\n**** Рекурсивный Timeout *******************************\n");

function j() {
  console.log("func j");
}
function k() {
  console.log("func k");
}
function run() {
  console.log("func run");
  setTimeout(j, 2000);
  setTimeout(k, 1900);
}

setTimeout(run, 500); // func run
// func k
// func j

// infinity loop
// setTimeout(function run() {
//     console.log('func run');
//   j();
//   setTimeout(run, 1000);
// }, 1000);
