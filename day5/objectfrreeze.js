//object freeze method
const student = {
    name: "harsha",
    age: "17"
}
console.log(Object.isFrozen(student));
Object.freeze(student);
console.log(student);

student.course = "Computer Science";
delete student.age;
student.name = "sri"; //cant able to modify existing values
console.log(student); //freeze cannot able to add or remove object

console.log(Object.isFrozen(student)); //isfrozen