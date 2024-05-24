//objectseal  
const person = {
    name: "srihariesh",
    age: "22",
    place: "erode"

}
console.log(Object.isSealed(person)); //false

Object.seal(person);

person.age = "20"; //modification of existing values is only possible in this seal method
console.log(person);
delete person.name; //by using seal it cant able to delete the values in object
console.log(person);
person.state = "TamilNAdu"; //cant able to add the properties to object in seal method
console.log(person);

console.log(Object.isSealed(person)); //isSealed