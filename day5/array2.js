var vehicle = new Array("bus", "car", "bike"); //creation of array using new keyword
console.log(vehicle);

vehicle[6] = "scooty";
console.log(vehicle);
vehicle.push("van"); //adding elements
vehicle.push("lorry"); //adding elemets
console.log(vehicle);

//vehicle.length = 5     //reudce array size
//console.log(vehicle);


for (let i = 0; i < vehicle.length; i++) {
    console.log(vehicle[i]);
}
console.log(Object.keys(vehicle));
console.log(Object.values(vehicle));

vehicle.forEach((items, index) => { console.log(`${index}:${items}`) }); //foreach