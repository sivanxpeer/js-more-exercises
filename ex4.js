const { performance } = require('perf_hooks');

// function recieves n- number with at least 3-digit, and returns how many even digits are in the range of 111 to n

function countEven1(num) {
    let s= num+"";
    let counter =0;
    for(char of s){
        if(char%2===0)
            counter++;
    }
 return counter;
}

function countEvenOnRange(n){
    let counter =0; 
    for(let i=111;i<=n;i++){
        counter+=countEven1(i);
    }
    return counter;
}

var startTime = performance.now();
console.log(countEvenOnRange(118));
var endTime = performance.now();
console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)


