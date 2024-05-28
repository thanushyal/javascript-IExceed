let stud = {
    name: "thanus",
    role: "developer",
};
let employee = {
    name: "hariesh",
    display: function(...empno)

    {
        this.empno = empno;
        console.log(this.name);
        console.log(this.role);
        console.log("emp no:" + this.empno)
    }
};
employee.display.apply(stud, [2345]); //apply method pass values in array format