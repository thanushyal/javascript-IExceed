//Object.is()method

n = 10;
m = 9;
console.log(Object.is(n, m)); //false
b = "thanu";
t = "sri";
l = "sri";
console.log(Object.is(t, b)); //false
console.log(Object.is(t, l)); //true

console.log(Object.is(-8, 8)); //false
console.log(Object.is(-19, -19)); //true
console.log(Object.is(NaN, NaN)); //true
console.log(Object.is(NaN, 9)); //false

const stud = { name: "sri" };
const stud1 = { name: "mithun" };
stud3 = stud;
console.log(Object.is(stud3, stud1)); //ture
console.log(Object.is(stud, stud3)); //false