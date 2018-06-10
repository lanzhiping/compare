const test = require('./testRunner');
const Immutable = require('immutable');

test('compare Immutable.Map and Object property accessing', (compare) => {
    const map = Immutable.Map({ a: 'a' });
    const getAFromMap = () => map.get('a');
    const obj = { a: 'a' };
    const getAFromObj = () => obj.a;

    compare(1000, getAFromMap, getAFromObj);
    compare(10000, getAFromMap, getAFromObj);
    compare(100000, getAFromMap, getAFromObj);
});

test('compare Immutable.Map and Object property accessing in nested object case', (compare) => {
    const map = Immutable.fromJS({ a: { b: { c: 'c' } } });
    const getAFromMap = () => map.get('a').get('b').get('c');
    const obj = { a: { b: { c: 'c' } } };
    const getAFromObj = () => obj.a.b.c;

    compare(1000, getAFromMap, getAFromObj);
    compare(10000, getAFromMap, getAFromObj);
    compare(100000, getAFromMap, getAFromObj);
});
