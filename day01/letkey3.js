function mydata() {
    let name = "harsha"; //block scoped variable
    let place = "erode";
    console.log("I am  " + name + " from" + "  " + place);
}
mydata();

console.log(name + place); //cannot be access let keyword variable because this variable is inside the  block