const binarySearch = (arr, value) => {
    let startIndex = 0;
    let endIndex = arr.length - 1;
    let steps = 1;

    while (startIndex <= endIndex) {
        let middleIndex = Math.round((startIndex + endIndex) / 2);
        let middleValue = arr[middleIndex];
        if (value < middleValue) {
            endIndex = middleIndex - 1;
            steps += 1;
        } else if (value > middleValue) {
            startIndex = middleIndex + 1;
            steps += 1;
        } else {
            return [middleIndex, steps];
        }
    }

    return [-1, steps];
}

module.exports = binarySearch;
