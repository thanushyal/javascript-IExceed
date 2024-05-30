let p = new Promise((resolve, reject) => {
    let num = 5;
    if (num % 2 == 0) {
        resolve();
    } else {
        reject();
    }
});
p.then((resolve) => {
    console.log("Even Number");
}).catch((reject) => {
    console.log("Odd Number");
});