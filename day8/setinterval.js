dispTime = function() {
    let datetime = new Date();
    let time = datetime.toLocaleString();
    console.log(time);
}
setInterval(dispTime, 1000);