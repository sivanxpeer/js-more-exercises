const { performance } = require('perf_hooks');

//print all even numbers from 100 to 0 
// bonus - without if 

function printReverse(){
    for(let i=100;i>=0;i-=2)
        console.log(i);
}

function printReverse1(){
    for(let i=100;i>=0;i--)
        if(i%2===0)
            console.log(i);
}

var startTime = performance.now();
printReverse();
var endTime = performance.now();
console.log(`Call took ${endTime - startTime} milliseconds`)

var startTime = performance.now();
printReverse1();
var endTime = performance.now();
console.log(`Call took ${endTime - startTime} milliseconds`)


