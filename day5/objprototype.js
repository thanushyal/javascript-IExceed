function aadhar(name, number) {
    this.name = name;
    this.number = number;

}
aadhar.prototype.display = function(ph__no) {
    console.log(`Name in aadhar : ${this.name} `);
    console.log(`Aadhar number:${this.number}`);
    console.log(`mobile number:${ph__no}`);

}
let a1 = new aadhar("thanu", 332565892540);
a1.display(6385561779);