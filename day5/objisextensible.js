//object.isextensible()method

const employee = {}
employee.name = "jhohith";
employee.age = "24";
employee.officeName = "CTS";
console.log(employee);

console.log(Object.isExtensible(employee));

console.log(Object.preventExtensions(employee)); //prevent extension wont allow to add the properties in object
console.log(Object.isExtensible(employee));
delete employee.age;
console.log(employee); //able to delete