//parameterised function
function power(n1, n2) {
    let s = n1 ** n2;
    console.log(n1 + " power " + n2 + " is " + s);
}
power(5, 2);

function calc(p1, p2, p3) {
    return p1 * p2 * p3;

}
console.log(calc(3, 3, 3));

function name(n) {
    return; //gives output as undefined
}
console.log(name("thanu"));

function calc1(s1, s2, s3) {
    return (
        s1 + s2 + s3);

}
console.log(calc1(3, 20, 7));