let count = 0;
display = function() {
    count = count + 1; //1
    console.log(count);
}

display1 = function() {
    count1 = 10
    count1 = count1 + 1; //2
    console.log(count1);
}
display2 = function() {
    count2 = 30;
    count2 = count2 + 1; //3
    console.log(count2);
}

let timerid = setTimeout(display, 2000);
clearTimeout(timerid);
setTimeout(display1, 3000);
setTimeout(display2, 1000);