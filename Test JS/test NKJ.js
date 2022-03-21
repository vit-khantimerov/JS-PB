for (let index = 1; index < 10000000; index++) {
  let rez =
    // index % 17 == 16 && >> not result
    index % 16 == 15 &&
    index % 15 == 14 &&
    index % 14 == 13 &&
    index % 13 == 12 &&
    index % 12 == 11 &&
    index % 11 == 10 &&
    index % 10 == 9 &&
    index % 9 == 8 &&
    index % 8 == 7 &&
    index % 7 == 6 &&
    index % 6 == 5 &&
    index % 5 == 4 &&
    index % 4 == 3 &&
    index % 3 == 2 &&
    index % 2 == 1
      ? index
      : -1;
  if (rez != -1) console.log(index);
}

/*************************
PS C:\HTML +\JS PB > node "c:\HTML+\JS PB\TEST JS\test NKJ.js"  
720719
1441439
2162159
2882879
3603599
4324319
5045039
5765759
6486479
7207199
7927919
8648639
9369359
*/

console.log("\n***********************************\n");
console.log(720719);
for (let index = 2; index <= 16; index++) {
  console.log(720719 % index);
}

/*****  Результат  *****
720719
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
*/
