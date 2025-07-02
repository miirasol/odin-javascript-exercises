const removeFromArray = (array, ...nums) => {
    // let i = 0;
    // let j = 0;

    // while (i < nums.length) {
    //     while (j < array.length) {
    //         if (array[j] === nums[i]) {
    //             array.splice(j, 1);
    //         } else j++;
    //     }
    //     i++;
    //     j = 0;
    // }

    // return array;

    return array.filter((item) => !nums.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
