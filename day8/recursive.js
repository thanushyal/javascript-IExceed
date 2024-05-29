function pow_rec(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow_rec(x, n - 1);
    }
}
console.log(pow_rec(2, 7));



function fact(m) {
    if (m == 1) {
        return m;
    } else {
        return m * fact(m - 1);
    }
}
console.log(fact(4));