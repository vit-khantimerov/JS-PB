
/*************************/
function f(acc, item, i, arr) {
  console.log(acc, " ", item);
  acc += item;
  return acc;
}

console.log(f(0, 10));
