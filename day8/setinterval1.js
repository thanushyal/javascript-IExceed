//setinterval with stop condition
let timerid = setInterval(function dispalyTime() {
    for (i = 0; i <= 20; i++) {
        if (i % 2 == 0) {
            clearInterval(timerid);
            continue;
        }

        let datetime = new Date();
        let time = datetime.toLocaleString();
        console.log(time);

    }
}, 1000);