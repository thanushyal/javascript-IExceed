let friend = {
    name: "hariesh",
    age: "22",
    "native place": "ooty" //multiple words in double quotes

};
var s = friend["native place"];
console.log(s);

friend["native place"] = "karattupalayam";
console.log(friend);