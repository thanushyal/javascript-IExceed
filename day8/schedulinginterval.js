//settimeinterval 
officeDetails = function(offc_name, place, role) {
    this.offc_name = offc_name;
    this.place = place;
    this.role = role;
    console.log(`eployee's office name: ${this.offc_name}`);
    console.log(`workplace: ${this.place}`);
    console.log(`employee's role: ${this.role}`);

}
setInterval(officeDetails, 1000, "IExceed", "salem", "Developer"); //setinerval