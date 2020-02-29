export const getSortedArray = (arr) => {
    return arr.sort((a, b) => b > a ? 1: -1);
};
