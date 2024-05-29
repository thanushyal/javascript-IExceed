function fact(m) {
    if (m == 1) {
        return m;
    } else {
        return m * fact(m - 1);
    }
}
console.log(fact(4));
console.log(fact(1));
console.log(fact(5));