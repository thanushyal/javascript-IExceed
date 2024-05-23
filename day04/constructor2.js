//constructor cannot be redeclared
//consctructor can return the value

let stud = class {
    constructor(x, y, name, ...args) {
        this.x = x;
        this.y = y;
        this.name = name;
        this.args = args;
        console.log(this.x);
        console.log(this.y);
        console.log(this.name);
        console.log(this.args);
    }
}
s1 = new stud(2020, 2021, "thanu", 90, 12, 23, 34, 45);