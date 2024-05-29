//setTimeout() without parameters
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
setTimeout(display, 3000); //executes after 3seconds
setTimeout(displayteacher, 1000) //executes after 2seconds