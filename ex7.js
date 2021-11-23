const { performance } = require('perf_hooks');

//function gets a sentence and returns how many times each letter appears

//make an array 
function countABC(sentence) {
    sentence = sentence.replace(/\s/g, "");
    let letterCounter = {};
    for (letter of sentence) {
        if (!letterCounter[letter]) {
            letterCounter[letter] = 1;
        }
        else letterCounter[letter] += 1;
    }
    return letterCounter;
}

// check with if for " "
function countABC1(sentence) {
    let letterCounter = {};
    for (letter of sentence) {
        if (letter !== " ") {
            if (!letterCounter[letter]) {
                letterCounter[letter] = 1;
            }
            else letterCounter[letter] += 1;
        }
    }
    return letterCounter;
}

var startTime = performance.now();
console.log(countABC1("hello my name is sivan"));
var endTime = performance.now();
console.log(`Call took ${endTime - startTime} milliseconds`)

var startTime = performance.now();
console.log(countABC("hello my name is sivan"));
var endTime = performance.now();
console.log(`Call took ${endTime - startTime} milliseconds`)

