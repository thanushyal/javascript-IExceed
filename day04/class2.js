let bank = class {

    constructor(bankName, IFSC_code, branch) {
        this.bankName = bankName;
        this.IFSC_code = IFSC_code;
        this.branch = branch;

    }

    displaydetails() {
        console.log(`Bank name is ${this.bankName} `);
        console.log(`IFSC code is ${this.IFSC_code}`);
        console.log(`BRANCH ${this.branch}`);
    }
}


b = new bank("KVB", "SBLV435", "chengapalli");
b.displaydetails();