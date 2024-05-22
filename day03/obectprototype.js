//object prototype
let emp = {
    office: "IExceed",
    cal_exp: function() {
        var currentyear = new Date().getFullYear();
        var no_of_years = currentyear - this.joining_date;
        console.log("total experience:" + no_of_years + " years");

    }
}
var w1 = Object.create(emp) //creating object
w1.name = "sri";
w1.joining_date = 2019;
console.log("Employee name1:" + w1.name);
console.log("Office Name:" + w1.office);
w1.cal_exp();

var w2 = Object.create(emp)
w1.name = "kavi";
w1.joining_date = 2015;
console.log("Employee name2:" + w1.name);
console.log("Office Name:" + w1.office);
w1.cal_exp();