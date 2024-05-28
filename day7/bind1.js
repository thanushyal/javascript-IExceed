let stud = {
    name: "thanus",
};
let employee = {
    name: "hariesh",
    display: function()

    {
        console.log(this.name);
    }
};
let op = employee.display.bind(stud);
op();