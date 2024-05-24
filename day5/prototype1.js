function student(name, age) {
    this.name = name,
        this.age = age,


        student.prototype.displaydetails = function() {
            return `studentn name  ${this.name}  and Rolno ${this.rollno}`;
        }

}
s1 = new student("sri", 20);
console.log(s1.displaydetails());