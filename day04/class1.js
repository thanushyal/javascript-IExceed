class bank {

    constructor(bankName, IFSC_code) {
        this.bankName = bankName;
        this.IFSC_code = IFSC_code;

    }

    displaydetails() {
        console.log(`Bank name is ${this.bankName} and IFSC code is ${this.IFSC_code}`);
    }
}


b = new bank("KVB", "SBLV435");
b.displaydetails();