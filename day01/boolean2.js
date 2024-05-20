//boolean sample

let status = true;

console.log("typeof variable:" + typeof(status));

function getvalue() {
    if (status == true) {
        console.log("active");
    } else {
        console.log("inactive");
    }
}
getvalue();