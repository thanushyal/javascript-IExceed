//let keyword and reassign and redeclaration

let student_name; //global variable            //declaration
student_fname = "Thanushya"; //global variable    //initialization
let student_lname = "Loganathan"; //global variable 
let fullname = student_fname + student_lname;

function getdetails() {
    let fullname = student_fname + student_lname; //this variable is cannot acccess in other block beacuse it is declared by let keyword
    console.log("Student full name is:" + fullname);
}
getdetails();

function getaddress() {
    let place = "uthukuli";
    let district = "tiruppur district"; //block scoped variable
    let pincode = 638752;
    // let  district="salem";(variable declared by let keyword cannot be reassigned inside the block)

    let address = place + "  " + district + "-" + pincode;
    console.log("name of the student:" + student_fname);
    console.log("address of the student:" + address);
}
getaddress();
let pincode = 636009; //block scoped varIABLE CAN BE REASSIGN OUTSIDE THE BLOCK
console.log("pincode -" + pincode);