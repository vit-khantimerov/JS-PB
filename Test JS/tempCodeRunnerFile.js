// повторить с интервалом 2 секунды
let timerId = setInterval(() => console.log('tick'), 2000);
// остановить вывод через 10 секунд
setTimeout(() => { clearInterval(timerId); console.log("stop"); }, 11000);