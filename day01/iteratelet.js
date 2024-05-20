let s = 5;

function iterate() {
    for (let t = 10; t >= 0; t -= 2) {
        console.log("inside variable:" + t); //block scoped variable access inside block
    }
    //console.log("inside variable:" + t);  (t is not access bcz the variable is block scope variable)
    console.log("global variable:" + s) //global variable
}
iterate()