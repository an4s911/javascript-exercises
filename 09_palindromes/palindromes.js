const reverseString = (string) => {
    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
}

const palindromes = function (string) {
    let cleanString = "";
    let lowercaseAlphaRegEx = /[a-z]/i;
    for (let ch of string.toLowerCase()) {
        cleanString += lowercaseAlphaRegEx.test(ch) ? ch : "";
    }

    return cleanString === reverseString(cleanString);
};

// Do not edit below this line
module.exports = palindromes;
