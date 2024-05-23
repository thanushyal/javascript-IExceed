//objectseal
const person = {
    name: "srihariesh",
    age: "22",
    place: "erode"

}
Object.seal(person);
person.age = "20"; //modification of existing values is only possible in this seal method
console.log(person);
delete person.name; //by using seal it cant able to delete the values in object
console.log(person);