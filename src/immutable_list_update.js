const test = require('./testRunner');
const Immutable = require('immutable');

test('compare Immutable.List updating and Array updating', (compare) => {
    const list = Immutable.List([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const updateItemFromList = () => list.update(8, x => x.toString());
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const updateItemFromArray = () => arr.map((x, index) => index === 8 ? x.toString() : x);

    compare(1000, updateItemFromList, updateItemFromArray);
    compare(10000, updateItemFromList, updateItemFromArray);
    compare(100000, updateItemFromList, updateItemFromArray);
});

test('compare Immutable.List updating and Array updating', (compare) => {
    const list = Immutable.fromJS([
        { id: '1', name: 'Bob1', age: 24, },
        { id: '2', name: 'Bob2', age: 25, },
        { id: '3', name: 'Bob3', age: 26, },
        { id: '4', name: 'Bob4', age: 27, },
        { id: '5', name: 'Bob5', age: 28, },
        { id: '6', name: 'Bob6', age: 29, },
        { id: '7', name: 'Bob7', age: 30, },
        { id: '8', name: 'Bob8', age: 31, },
        { id: '9', name: 'Bob9', age: 32, },
        { id: '10', name: 'Bob10', age: 33, },
        { id: '11', name: 'Bob11', age: 34, },
        { id: '12', name: 'Bob12', age: 35, },
        { id: '13', name: 'Bob13', age: 36, },
    ])
    const newItem = list.get(8).set('name', 'newName')
    const mapItemFromList = () => list.update(8, () => newItem);

    const arr = [
        { id: '1', name: 'Bob1', age: 24, },
        { id: '2', name: 'Bob2', age: 25, },
        { id: '3', name: 'Bob3', age: 26, },
        { id: '4', name: 'Bob4', age: 27, },
        { id: '5', name: 'Bob5', age: 28, },
        { id: '6', name: 'Bob6', age: 29, },
        { id: '7', name: 'Bob7', age: 30, },
        { id: '8', name: 'Bob8', age: 31, },
        { id: '9', name: 'Bob9', age: 32, },
        { id: '10', name: 'Bob10', age: 33, },
        { id: '11', name: 'Bob11', age: 34, },
        { id: '12', name: 'Bob12', age: 35, },
        { id: '13', name: 'Bob13', age: 36, },
    ];
    const mapItemFromArray = () => arr.map((x, index) => index === 8 ? ({ ...x, name: 'newName' }) : x );

    compare(1000, mapItemFromList, mapItemFromArray);
    compare(10000, mapItemFromList, mapItemFromArray);
    compare(100000, mapItemFromList, mapItemFromArray);
});
