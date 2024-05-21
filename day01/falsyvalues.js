let r = undefined && true;
console.log(r); //undfined

let r1 = null && true;
console.log(r1); //null

let r2 = NaN && true;
console.log(r2); //NaN

let r3 = 0 && true;
console.log(r3); // 0

let r4 = "" && true;
console.log("empty string  falsy value" + r4);

let r5 = '' && true;
console.log("empty string ''falsy value" + r5);