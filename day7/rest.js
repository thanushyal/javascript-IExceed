//rest operator

function addition(...args) {
    let sum = 0;
    for (i of args) {
        sum = sum + i;

    }
    console.log("sum of numbers:" + sum);
}
addition(1, 2, 3, 6, 5, 4, 9, 8, 7, 10);