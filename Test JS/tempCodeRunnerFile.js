
console.log('\n***********************************\n');
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

console.log(spy(f));