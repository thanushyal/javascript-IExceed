let promise = new Promise(function (resolve, reject) {
    var x = "Iexceed salem ";
    var y="Iexceed Technologies salem";
    
    
    if (x.length == y.length) {
        resolve();
    } else {
        reject();
    }
});

promise.
    then(function () {
        console.log('x and y variable have same length');
    }).
    catch(function () {
        console.log(' x and y have different length');
    });
