function mathfunctions(y) {
    let n = Math.cbrt(y);
    console.log("cuberoot of " + y + "  is " + n);
}
mathfunctions(27);



let x = Math.cbrt(27000);
console.log(x);


let x1 = Math.cbrt(0);
console.log(x1);


let x2 = Math.cbrt(-64);
console.log(x2);

let x3 = Math.cbrt(Infinity);
console.log(x3);

let x4 = Math.cbrt(NaN);
console.log(x4);