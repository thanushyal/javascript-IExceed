function data(name, age, ...args) {
    console.log(name + age);
    console.log(args);
}
data("thanu", 21, 2, 30);

function numbers(...args) {
    console.log(args)
}
numbers(1, 4, 7, 8, 5, 1, 2, 5, 8, 7);

function n_sort(...args) {
    console.log(args.sort());
}
n_sort(8, 9, 7, 5, 6)