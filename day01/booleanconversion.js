let value = Boolean(null);
console.log(value); //false
let value1 = Boolean(undefined);
console.log(value1); //false
let value2 = Boolean(NaN);
console.log(value2); //false
let value3 = Boolean(" ");
console.log(value3); //false
let value4 = Boolean("welcome to iexceed");
console.log(value4); //true
let value5 = Boolean(0);
console.log(value5); //false
let value6 = Boolean(1);
console.log(value6); //true