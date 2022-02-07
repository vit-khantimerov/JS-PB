
console.log("\n***********************************\n");
function ff(f) {
  setTimeout(() => console.log("test time", f), 500);
}

setTimeout(() => {
  for (let index = 0; index < 10; index++) {
    setTimeout(ff,500,index);
  }
}, 500);
