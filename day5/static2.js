class stud {
    static school = "kongu matric";
    construcor(name, standard) {
        this.name = name;
        this.standard = standard;

    }
    displaydetails() {
        return `name ${this.name} and rollno ${this.standard}`;
    }
}
s1 = new stud();
s1.displaydetails("mithun", 7);