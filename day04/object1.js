//object assign method


const student = {
    name: "gokul",
    city: "erode",

}
Object.assign(student, {
    name: "logu", //name is reassigned
    age: 24,
    address: "148/12,kunnathur road",
    place: "uthukuli",
    city: "tirupur",
    state: "Tamilnadu",
});
console.log(student);