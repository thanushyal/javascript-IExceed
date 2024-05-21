let office_name = "Iexceed Technologies"; //global variable
function office_details() //function declaration
{
    let address = "1,royal garden,salem"; //local variable
    console.log("Office Name:", office_name);
    console.log("Adress of the office:" + address);
}
office_details();

function emp_details() {
    let emp_name = "SriHariesh";
    console.log("Employee Name:" + emp_name);
    console.log("Office Name:" + office_name);
}
emp_details();