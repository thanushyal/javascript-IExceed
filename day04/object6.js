//object freeze method
const student = {
    name: "harsha",
    age: "17"
}
Object.freeze(student);
console.log(student);

student.course = "Computer Science";
delete student.age;
console.log(student); //freeze cannot able to add or remove object