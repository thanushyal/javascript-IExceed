//let keyword (blockscoped variable)
function getaddress() {
    let place = "uthukuli";
    let district = "tiruppur district"; //block scope
    let pincode = 638752;
    console.log("address =" + place + "  " + district + "-" + pincode);
}
getaddress();