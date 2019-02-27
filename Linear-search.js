const linearSearch = (arr, value) => {
    let steps = 1;

    for (let i = 0; i < arr.length; i += 1) {
        let item = arr[i];
        if (item === value) {
            return [i, steps];
        }

        steps += 1; 
    }

    return -1;
}

module.exports = linearSearch;
