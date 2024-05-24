const stud = {}
Object.defineProperties(stud, {
    name: {
        value: "sri",

        writable: true,
    },
    address: {
        city: "tirupur",
        state: "TamilNadu",
    }
});
s = new Object();
console.log(stud.name);