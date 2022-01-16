const removeFromArray = function (array) {
    for (const item of arguments) {
        if (item === array) continue;

        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (element === item) {
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
