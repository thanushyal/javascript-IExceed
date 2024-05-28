let numbers = [10, 59, 40, 30, 34];
console.log(Math.max(...numbers)); //spread operators
let numbers1 = [20, 55, 66, 99, 88, 77, 44]
let values = [30, 52, 12, 20, 30];
let mergevar = [...numbers1, ...values];
console.log(mergevar);
console.log(Math.max(...mergevar));