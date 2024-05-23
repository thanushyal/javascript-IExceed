//object assign another method
const employee = {
    name: "kavi",
    age: 22,
}


const employee1 = {...employee,
    ... { native: "erode" }
}
console.log(employee1);