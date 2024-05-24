var vehicle = new Array("bus", "car", "bike"); //creation of array using new keyword
console.log(vehicle);
for (let i of Object.keys(vehicle)) {
    console.log(vehicle[i]);
    console.log(`${i}:${vehicle[i]}`);
}