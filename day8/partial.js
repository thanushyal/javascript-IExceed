function display(element, content) {
    var element = new Array();
    element.push(content);
    for (i of element) {
        console.log(i);
    }
}
let array1 = display.bind(null, 'element');
array1("sri");
array1("jho");
array1("mithun");