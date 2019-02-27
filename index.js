const linearSearch = require('./Linear-search.js');
const binarySearch = require('./Binary-search.js');


const length = Number(process.argv[2]);
const array = [];

for (let i = 0; i < length; i += 1) {
    array[i] = i + 1;
}

{
    console.time('Линейный поиск');
    const [index, steps] = linearSearch(array, length);
    console.timeEnd('Линейный поиск');
    console.log(index, steps);
}

{
    console.time('Бинарный поиск');
    const [index, steps] = binarySearch(array, length);
    console.timeEnd('Бинарный поиск');
    console.log(index, steps);
}
