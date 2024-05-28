let stud = {
    name: "thanus",
    role: "developer",
};
let employee = {
    name: "hariesh",
    display: function()

    {
        console.log(this.name);
        console.log(this.role);
    }
};
employee.display.call(student);