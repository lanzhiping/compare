const test = require('./testRunner');
const Immutable = require('immutable');

test('compare Immutable.Map.set and Object property spread', (compare) => {
    const map = Immutable.Map({
        a: 'a',
        b: true,
        c: 1,
        d: 'd',
    });
    const setFromMap = () => map.merge({ b: false, c: 2 });
    const obj = {
        a: 'a',
        b: true,
        c: 1,
        d: 'd',
    };
    const setFromObj = () => ({ ...obj, b: false, c: 2 });

    compare(1000, setFromMap, setFromObj);
    compare(10000, setFromMap, setFromObj);
    compare(100000, setFromMap, setFromObj);
});

test('compare Immutable.Map.set and Object property spread in nested object case', (compare) => {
    const map = Immutable.fromJS({
        a: { a1: { a11: 'a' } },
        b: { b1: { b11: 'b' } },
        c: { c1: { c11: 'c' } },
    });
    const setFromMap = () => map.setIn(['a', 'a1', 'a11'], 'a111')
    const obj = {
        a: { a1: { a11: 'a' } },
        b: { b1: { b11: 'b' } },
        c: { c1: { c11: 'c' } },
    };
    const setFromObj = () => {
        const a1 = { ...obj.a1, a11: 'a111' }
        const a = { ...obj.a, a1 }
        return ({ ...obj, a })
    };

    compare(1000, setFromMap, setFromObj);
    compare(10000, setFromMap, setFromObj);
    compare(100000, setFromMap, setFromObj);
});
