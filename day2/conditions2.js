//ternary condition chaining
let mark = 71;
if (mark < 45) {
    console.log("re-appear");
} else if (mark > 45 && mark <= 60) {
    console.log("grade E");
} else if (mark > 60 && mark <= 70) {
    console.log("grade D");
} else if (mark > 70 && mark <= 80) {
    console.log("grade C");
} else if (mark > 80 && mark <= 90) {
    console.log("grade B");
} else {
    console.log("grade A");
}


//condition chaining
let m = 70;
let res = m < 45 ? "re-appear" :
    m > 45 && m <= 60 ? "grade E" :
    m > 60 && m <= 70 ? "grade D" :
    m > 70 && m <= 80 ? "grade C" :
    m > 80 && m <= 90 ? "grade B" :
    "grade A";
console.log("GRADE=" + res);