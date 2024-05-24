let stud = class {
    constructor(name, rollno) {
        this.name = name;
        this.rollno = roll.no;
    }
    stud.prototype.displaydetails = function() {
        return `studentn name  ${this.name}  and Rolno ${this.rollno}`;
    }
}
obj1 = new stud("sri", 22);
console.log(obj1.displaydetails())