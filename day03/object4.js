let student = {
    name: "thanu",
    rollno: "20bcr054",
    "native place": "Erode",

};
let stud1 = student; //assigning object to variable
console.log(stud1);

let y = student["native place"] = "salem";
console.log(stud1); //variable name
console.log(student); //object name