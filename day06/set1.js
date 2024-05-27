let set1 = new Set();
set1.add(2002);
set1.add("thanus")
set1.add("java");
set1.add("Iexceed ");
set1.add("thanus")
set1.add("thanus1")
console.log(set1);

set1.delete("java");
console.log(set1);

for (let i of set1) {
    console.log(i);
}

s = set1.has("iexceed");
console.log(s);
s1 = set1.has("Iexceed");
console.log(s1);

s2 = set1.has("Iexceed ")
console.log(s2);