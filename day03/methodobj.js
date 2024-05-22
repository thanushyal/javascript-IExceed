let office = {
    joining_year: "2017",
    calculateExp() { //method in object
        var currentyear = new Date().getFullYear();
        var exp = currentyear - this.joining_year;
        console.log("experience =" + exp + " years");


    }

}
office.calculateExp();