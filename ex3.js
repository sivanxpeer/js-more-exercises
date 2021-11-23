const { performance } = require('perf_hooks');

//how many digits of num are even


// naive solution:
function countEven(num) {
    let counter = 0;
    while (num) {
        let digit = Math.floor(num % 10);
        if (digit % 2 == 0)
            counter++;
        num = Math.floor(num / 10);
    }
    return counter;
}


//make number a string and loop over it
function countEven1(num) {
    let s= num+"";
    let counter =0;
    for(char of s){
        if(char%2===0)
            counter++;
    }
 return counter;
}


//measure time of functions execution to compare them

var startTime = performance.now();
console.log(countEven(55232860002));
var endTime = performance.now();
console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)


var startTime = performance.now();
console.log(countEven1(55232860002));
var endTime = performance.now();
console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)

