//create function from string

let student = new Function('mark1', 'mark2', 'return mark1+mark2');
console.log(student(70, 80));

function getvalue() {
    let v1 = "20";
    v2 = "70";
    v3 = "44";
    value = v1 + v2 + v3;
    let func = new Function(console.log(value));
    return func;

}
getvalue()();

function getvalue1(v1) {


    let func1 = new Function(console.log(v1));
    return func1;

}
getvalue1("IExceed")();