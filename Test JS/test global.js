d = 0;

{
    {
        let a = 1;
        c = 3;
    }
}

function f() {
    var b = 2;
}

d = 4;

console.log(c);
console.log(d);
console.log(f());
console.log(a);

// [Running] node "/home/HE080372KVG/JS-PB/Test JS/test global.js"
// 3
// 4
// undefined
// /home/HE080372KVG/JS-PB/Test JS/test global.js:14
// console.log(a);
//             ^

// ReferenceError: a is not defined