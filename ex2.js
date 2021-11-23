const { performance } = require('perf_hooks');

// how many numbers are divided by t from 1-n 

//simple loop 
function countX(n, t) {
    let counter = 0;
    for (let i = 1; i <= n; i++) {
        if (i % t === 0) {
            counter++;
        }
    }
    return counter;
}


//try to lower comparisons
function count(n, t) {
    let counter = 0;
    for (let i = 3; i < n; i += 3) {
        counter++;
    }
    return counter;
}



//measure time of functions execution to compare them
var startTime = performance.now()
console.log(countX(100, 3));
var endTime = performance.now()
console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)


var startTime = performance.now()
console.log(count(100, 3));
var endTime = performance.now()
console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)


