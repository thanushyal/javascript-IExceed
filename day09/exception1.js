function numbers(x, y) {
    try {
        if (y == 0) {
            throw ("zero error");
        } else {
            console.log(x / y);
        }
    } catch (e) {
        console.log(e);
    } finally {
        console.log(x + "+" + y + "=" + (x + y));

    }
}
numbers(10, 5);
numbers(18, 0);