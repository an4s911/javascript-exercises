const findTheOldest = function (array) {
    return array.slice(1).reduce((obj, item) => {
        const prevAge = getAge(obj);
        const currAge = getAge(item);
        return currAge > prevAge ? item : obj;
    }, array[0]);
};

function getAge(person) {
    if ("yearOfDeath" in person) {
        return person.yearOfDeath - person.yearOfBirth;
    }
    const currYear = (new Date()).getFullYear();
    return currYear - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
