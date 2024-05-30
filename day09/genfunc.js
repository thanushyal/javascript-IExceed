function* gen() {
    let rollno = "1";
    while (rollno < 100) {

        yield rollno++;
    }
}
let result = gen();
console.log(result.next().value);
console.log(result.next().value);