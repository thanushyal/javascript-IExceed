//prototypal inheritance

let baseclass = {
    father_name: "sri",
    calculateAge: function(dob) {
        this.dob = dob;
        console.log(new Date().getFullYear() - this.dob);
    },
};
let child = {
    name: "mithun",
    qualification: "CTUG"

};
child.__proto__ = baseclass;
child.calculateAge(2002);
let val_qual = {
    __proto__: child,
}
console.log(val_qual.qualification);