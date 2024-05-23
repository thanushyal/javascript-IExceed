//define property
const employee = {}
employee.name = "jhohith";
employee.age = "24";
employee.officeName = "CTS";
console.log(employee);


const employee1 = (employee, "name", { value: "jhohith", writable: true },
    Object.defineProperty(employee, "age", {
        get() { //also use method inside difine property
            currentyear = 2024;
            dobYear = "2000";
            eAge = currentyear - dobYear;
            return eAge;

        }
    }));
console.log(employee.age);