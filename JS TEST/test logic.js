console.log( 1 || 0 ); // 1
console.log( true || 'no matter what' ); // true
console.log( 'no matter what' || true); // no matter what

console.log( null || 1 ); // 1 (первое истинное значение)
console.log( null || 0 || 1 ); // 1 (первое истинное значение)
console.log( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее значение)
console.log( 0 || 'a' || 'b' || null ); // a

/************************/
let currentUser = null;
let defaultUser = "John";
let name_ = currentUser || defaultUser || "unnamed";
console.log( name_ ); // выбирается "John" – первое истинное значение

/************************/
let x, y;
false || (x = 1);
console.log(x); // 1
true || (y = 1);
console.log(y); // undefined

/************************/
console.log( null || 2 && 3 || 4 ); // 3

/************************/
// Результат -1 || 0 = -1, в логическом контексте true
if (-1 || 0) console.log( 'first' ); //+++  first

// Не выполнится
// -1 && 0 = 0,  в логическом контексте false
if (-1 && 0) console.log( 'second' ); //-----

// Выполнится
// оператор && имеет больший приоритет, чем ||
// так что -1 && 1 выполнится раньше
// вычисления: null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) console.log( 'third' ); // +++ third
