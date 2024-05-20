"use strict";
//z="thanu";
//console.log(z);   it cannot work bcz of not using let nd var keyword in strict mode
let z = "thanu";
console.log(z);

function strconcat(z, y) {

    console.log("STRING CONCAT:" + z + y);

}
strconcat("thanu", "logu");

/*function square(number,number)
{
    var res_square=number**number;
    console.log(res_square);
}
square(10,10); */ //variable is not decalared and it give duplicate error bcz of using strict mode