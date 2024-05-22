function employee(id, name, role) {
    this.id = id;
    this.name = name;
    this.role = role;
}
e1 = new employee(35, "thanu", "software engineer trainee");
console.log(e1);


e1.id = 4438; //value is mutable
console.log(e1);