//entries
const employee = {}
employee.name = "jhohith";
employee.age = "24";
employee.officeName = "CTS";
console.log(employee);

//covert objects to array
employeeAsArray = Object.entries(employee);
console.log(employeeAsArray);

//using from entries(convert array to object)

employeeobj = Object.fromEntries(employeeAsArray);
console.log(employeeobj);


/*output
{ name: 'jhohith', age: '24', officeName: 'CTS' }
[ [ 'name', 'jhohith' ], [ 'age', '24' ], [ 'officeName', 'CTS' ] ]
{ name: 'jhohith', age: '24', officeName: 'CTS' }
*/