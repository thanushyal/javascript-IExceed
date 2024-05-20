//let nd var  (inside var keyword variable can access in outside the block)
let s = 20;

function iterate() {
    for (var t = 0; t <= 20; t += 2) {
        console.log("inside variable:" + t); //block scoped variable access inside block
    }
    console.log("inside var keyword variable in outside:" + t); //if variable declared by var keyword can access in oustide the block.
    console.log("global variable:" + s) //global variable
}
iterate()