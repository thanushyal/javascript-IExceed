//cleattimeout and settimeout
display = function() {
    let subjects = ["java", "javascript", "springboot", "reactjs", "python"];
    for (i of subjects) {
        if (i == "springboot") {
            console.log(i.toUpperCase());
        }
    }
}
displayteacher = function() {
    let teachers = ["java-SS", "javascrript-PS", 'springboot-RR', "reactjs-BK"]
    console.log(teachers[3]);
}
let timerid1 = setTimeout(display, 3000);
clearTimeout(timerid1); //clear the functioncall
setTimeout(displayteacher, 1000) //executes after 2seconds