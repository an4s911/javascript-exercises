const sumAll = function (num1, num2) {
    let sum = 0;
    if (num1 > num2) {
        const temp = num1;
        num1 = num2;
        num2 = temp;
    }

    if (typeof num1 !== typeof num2) {
        return "ERROR";
    }

    for (let i = num1; i <= num2; i++) {
        if (i < 0) return "ERROR";
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
