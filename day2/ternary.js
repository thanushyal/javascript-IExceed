//ternary
let stud_class = "B";
let ans = stud_class == "B" ? "student is in B class" : "student is in another class";
console.log(ans);

//condition chaining in ternary operator
let n1 = 20;
let n2 = 50;
let n3 = 10;
let res = n1 < n2 && n1 < n3 ? "n1 is smaller " :
    n2 < n1 && n2 < n3 ? "n2 is smaller" :
    n3 < n1 && n3 < n2 ? "n3 is smaller" :
    equal;
console.log(res);