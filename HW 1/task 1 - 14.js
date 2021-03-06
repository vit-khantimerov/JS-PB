/* ДЗ 1. Задача 14

Дано число `n=1000`. 
Делите его на 2 столько раз, пока результат деления не станет меньше 50. 
Какое число получится? 
Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную `num`.
*/

//  Решение
var n = 1000;
var num = 0;

do {
  n /= 2;
  num++;
}
while (n >= 50);

console.log('Результат: ' + n);         // Результат: 31.25
console.log('Кол-во итераций: ' + num); // Кол-во итераций: 5

