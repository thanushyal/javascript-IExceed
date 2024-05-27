let n = [20, 30, 1, 2, 3, 4, 5, 6]
console.log(n.map(x => x * x));

let names = ["  thanu  ", "   sri  ", "  kavya ", "kavya"]
console.log(names.map(x => x.trim())); //trim function
let names1 = ["  thanu  ", "   sri  ", "  kavya "]
mydata1 = names1.map(display = function(x) {
    return (x.toUpperCase().trim()) //uppercase function and trim function
});
console.log(mydata1);

let mydata = new Map();
mydata.set(1, 9000);
mydata.set(2, 7000);
mydata.set(3, 6000);
mydata.set(4, 3000); //accepts key values as both numbers and string
mydata.set(5, 2000);
mydata.set(true, 'value');

mydata.set("key1", "value1"); //accepts key values as both numbers and string

console.log(mydata);
console.log(mydata.get(3));
console.log(mydata.get(true));
console.log(mydata.get("key1"));