//using settimeout in arrow function
setTimeout((n1) => {
    if (n1 % 5 == 0) {
        console.log(n1 + "  is divided by 5")
    }
}, 2000, 20);
setTimeout((n2, n3) => {
    if (n2 > n3) {
        console.log(n2 + "  is greater than  " + n3);
    }
}, 1000, 999, 666);