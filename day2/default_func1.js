//assigning default values in function declaration
function bus(name, num = 9699) {
    console.log("Name of bus:" + name);
    console.log("Bus no:" + num);
}
bus("Everstar");



//default value not assigned
function bus1(name, num) {
    console.log("Name of bus:" + name);
    console.log("Bus no:" + num);
}
bus1("Godfather", 1699); //default value is not assigned it is  assigned



//writing function in default value
function bus3(name, num = busnum(8080)) {
    console.log("bus Name:" + name);

}
bus3("SMT");

function busnum(num) {
    console.log("Bus Number:" + num);
}


//default value will check and assign
function bus4(name, num) {
    if (num == undefined) {
        num = 4146;
    }
    console.log("bus name:" + name);
    console.log("bus number:" + num);
}
bus4("Sunshine");