//setTimeout with parameters
numbers = function(n1, n2, n3) {
    if (n1 < n2 && n1 < n3) {
        console.log(n1 + " is smaller");
    } else if (n2 < n1 && n2 < n3) {
        console.log(n2 + " is smaller");
    } else if (n3 < n1 && n3 < n2) {
        console.log(n3 + " is smaller")
    }

}

addition = function(x, y) {
        sum = x ** y;
        console.log(x + "**" + y + "=" + sum);
    }
    //passing arguments in setTimeout
setTimeout(numbers, 5000, 4, 2, 8); //executes after 5seconds
setTimeout(addition, 2000, 5, 2); //executes after 2seconds