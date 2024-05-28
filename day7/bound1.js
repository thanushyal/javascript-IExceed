function func(...args) {
    console.log(this, ...args);
}
let bound1 = func.bind("hariesh", 90, 89, 88);
let bound2 = bound1("mithun", 22, 33, 44);
let bound3 = bound1("jhohith", 66, 99, 55);

let bound4 = func.bind("vasanthi", 99, 88, 77, 44);
let bound5 = bound4("thanus", 11, 33, 44, 55);