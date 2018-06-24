const test = require('./testRunner');
const Immutable = require('immutable');

test('compare Immutable.List accessing and Array accessing', (compare) => {
    const list = Immutable.List([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const getItemFromList = () => list.find(x => x === 8);
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const getItemFromArray = () => arr.find(x => x === 8);

    compare(1000, getItemFromList, getItemFromArray);
    compare(10000, getItemFromList, getItemFromArray);
    compare(100000, getItemFromList, getItemFromArray);
});

test('compare Immutable.List mapping and Array mapping', (compare) => {
    const list = Immutable.List([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const mapItemFromList = () => list.map(x => x + 1);
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const mapItemFromArray = () => arr.map(x => x + 1);

    compare(1000, mapItemFromList, mapItemFromArray);
    compare(10000, mapItemFromList, mapItemFromArray);
    compare(100000, mapItemFromList, mapItemFromArray);
});
