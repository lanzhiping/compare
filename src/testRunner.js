function runFuncXTimes(times, func) {
    const iterations = times;
    console.time(`${func.name} #${times}`);

    for (let i = 0; i < iterations; i++ ) {
        func()
    };

    console.timeEnd(`${func.name} #${times}`)
}

function compare(times, func1, func2) {
    if (typeof func1 !== 'function' || typeof func2 !== 'function') {
        throw 'params error';
    }

    runFuncXTimes(times, func1);
    runFuncXTimes(times, func2);
}

function assert(first) {
    function toEqual(second) {
        if (first == second) {
            console.log('Passed!');
        } else {
            console.error('Faild!');
        }
    }

    function toBe(second) {
        if (first === second) {
            console.log('Passed!');
        } else {
            console.error('Faild!');
        }
    }

    return { toBe, toEqual };
}

function test(desc, testContent) {
    console.log(desc);
    testContent(compare, assert);
}

module.exports = test;
