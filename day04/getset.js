//getset in object
const bus = {
    available: "booked",
    busNumbers: [12, 90, 45, 16],
}
Object.defineProperty(bus, "no_of_bus", { value: 4, writable: false });
console.log(bus.no_of_bus);


Object.defineProperty(bus, "busNo_highorder", {
    get() {
        return Math.max(...this.busNumbers)
    }


})
console.log("busNo_highorder:" + bus.busNo_highorder);

Object.defineProperty(bus, "free", {
    set(x) {
        if (x) {
            this.available = "free";
        }
    }
});
bus.free = false;
console.log(bus.available);



//keys and values
console.log("keys in object:" + Object.keys(bus)); //printing key
console.log("values in object:" + Object.values(bus)); //printing values