// сделать информацию о текущем пользователе глобальной, для предоставления доступа всем скриптам
window.currentUser = {
  name: "John"
};

// где угодно в коде
console.log(currentUser.name); // John

// или, если у нас есть локальная переменная с именем "currentUser",
// получим её из window явно (безопасно!)
console.log(window.currentUser.name); // John


// [Running] node "/home/HE080372KVG/JS-PB/Test JS/test global obj.js"
// /home/HE080372KVG/JS-PB/Test JS/test global obj.js:2
// window.currentUser = {
// ^

// ReferenceError: window is not defined