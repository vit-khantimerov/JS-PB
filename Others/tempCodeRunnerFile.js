let firstName = null;
let lastName;
let nickName = "Суперкодер";
// показывает первое определённое значение:
// console.log(firstName ?? lastName ?? nickName ?? "Аноним"); // Суперкодер
// показывает первое истинное значение:
console.log(firstName || lastName || nickName || "Аноним"); // Суперкодер