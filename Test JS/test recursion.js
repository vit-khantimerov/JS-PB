function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

console.log(pow(2, 3)); // 8

/*************************/
function factorial(x) {
  if (x == 1) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}

console.log(factorial(5)); // 120

/*************************/
function fibo(x) {
  if (x == 0) {
    return 0;
  }
  if (x == 1) {
    return 1;
  }
  if (x == 2) {
    return 1;
  } else {
    return fibo(x - 2) + fibo(x - 1);
  }
}

console.log(fibo(10)); // 55

let clg = "";
for (let i = 0; i <= 20; i++) {
  clg += `${fibo(i)} `;
}
console.log(clg);
//0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765

/*************************/
let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

// Функция для подсчёта суммы зарплат
function sumSalaries(department) {
  if (Array.isArray(department)) {
    // случай (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
  } else {
    // случай (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
    }
    return sum;
  }
}
console.log(sumSalaries(company)); // 6700

/*************************/
let list = {
  value: "list 1",
  next: {
    value: "list 2",
    next: {
      value: "list 3",
      next: {
        value: "list 4",
        next: null,
      },
    },
  },
};

function printList(list) {
  console.log(list.value); // выводим текущий элемент
  if (list.next) {
    printList(list.next); // делаем то же самое для остальной части списка
  }
}
printList(list);
/*
list 1
list 2
list 3
list 4
*/
console.log();

function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }
  console.log(list.value);
}
printReverseList(list);

/*
list 4
list 3
list 2
list 1
*/