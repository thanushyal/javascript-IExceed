function numbers(x, y) {
    console.log("x= " + x + "  y= " + y);
    s = x + y;
    console.log("sum=" + s);
}
let values = numbers.bind(null, 6);
values(1);
values(4);
values(6);