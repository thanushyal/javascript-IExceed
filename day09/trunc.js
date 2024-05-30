function mathfunc(m) {
    let s = Math.trunc(m); //returns only the integer value
    console.log(s);
}
mathfunc(52.36985214);


let s1 = Math.trunc(-0);
console.log(s1);


let s2 = Math.trunc(-0.456);
console.log(s2);


let s3 = Math.trunc(-12398.09);
console.log(s3);

let s4 = Math.trunc(Infinity);
console.log(s4);


let s5 = Math.trunc(-Infinity);
console.log(s5);

const original = 3.14;
const truncated1 = ~~original; // Double negation
console.log(truncated1);
const truncated2 = original & -1; // Bitwise AND with -1
console.log(truncated2);

const truncated3 = original | 0; // Bitwise OR with 0
const truncated4 = original ^ 0; // Bitwise XOR with 0
const truncated5 = original >> 0; // Bitwise shifting by 0