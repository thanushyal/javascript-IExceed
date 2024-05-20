let str = "90" + 333; //implicitly converted to string
console.log(typeof(str) + "-" + str)
let address = 148 + ",kunnathur road,uthukuli RS";
console.log(typeof(address) + "- " + address);
let res = "9" - "5";
console.log(typeof(res) + "-" + res)
let num = "20" / 10;
console.log(typeof(num) + "-" + num);
var str1 = "IExceed Technologies";
console.log(typeof(str1) + "-" + str1);
var num1 = "90" + "89";
console.log(typeof(num1) + "-" + num1);

/*output
string-90333
string- 148,kunnathur road,uthukuli RS
number-4
number-2
string-IExceed Technologies
string-9089*/