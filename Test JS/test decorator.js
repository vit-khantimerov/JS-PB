// Декораторы и переадресация вызова, call/apply
// https://learn.javascript.ru/call-apply-decorators

// describe("spy", function () {
//   it("записывает вызовы в своё свойство", function () {
//     function work() {}

//     work = spy(work);
//     assert.deepEqual(work.calls, []);

//     work(1, 2);
//     assert.deepEqual(work.calls, [[1, 2]]);

//     work(3, 4);
//     assert.deepEqual(work.calls, [
//       [1, 2],
//       [3, 4],
//     ]);
//   });

//   it("прозрачно оборачивает функции", function () {
//     let sum = sinon.spy((a, b) => a + b);

//     let wrappedSum = spy(sum);

//     assert.equal(wrappedSum(1, 2), 3);
//     assert(sum.calledWith(1, 2));
//   });

//   it("прозрачно оборачивает методы", function () {
//     let calc = {
//       sum: sinon.spy((a, b) => a + b),
//     };

//     calc.wrappedSum = spy(calc.sum);

//     assert.equal(calc.wrappedSum(1, 2), 3);
//     assert(calc.sum.calledWith(1, 2));
//     assert(calc.sum.calledOn(calc));
//   });
// });

console.log("\n*** SPY ********************************\n");
function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, arguments);
  }
  wrapper.calls = [];
  return wrapper;
}

function f(a, b) {
  return a + b;
}

f = spy(f);

f(1, 2);
f(4, 5);
f(5, 10);

for (let args of f.calls) {
  console.log("calls of f: " + args.join());
}
