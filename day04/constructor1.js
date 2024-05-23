//constructor argumets
class numbers {
    constructor(num1, num2, num3) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
    }
    sum() {
        let result = this.num1 + this.num2 + this.num3;
        console.log(`additon of three numbers = ${result}`);
    }

}
n = new numbers(12, 10, 3);
n.sum();