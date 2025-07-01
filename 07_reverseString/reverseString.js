const reverseString = (string) => {
    let reverse = string.split('');

    reverse.reverse();

    return reverse.join('');
};

// Do not edit below this line
module.exports = reverseString;
