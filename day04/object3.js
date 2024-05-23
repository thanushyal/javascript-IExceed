//define property
const employee = {}
employee.name = "sri";
employee.age = "22";
employee.role = "developer";
employee.salary = "40000";
console.log(employee);



//define property

const employee1 = {}
Object.defineProperty(employee1, "name", { value: "sri", writable: true });
console.log(employee1.name);

employee1.name = "thanushya";
console.log(employee1.name);