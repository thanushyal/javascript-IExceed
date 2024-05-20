//var and var keyword

var s = 25;

function iterate() {
    for (var t = 0; t <= 20; t += 2) {
        console.log("inside variable:" + t); //block scoped variable access inside block
    }
    console.log("inside var keyword variable in outside:" + t);
    console.log("global variable:" + s) //global variable
}
iterate()