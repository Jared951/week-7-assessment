const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

// Sum Zero, runtime: O(n^2)
let arr = [1, 2, 3, -2]
const addToZero = () => {
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return true
            }
        }
    }
    return false
}
console.log(addToZero())


// Unique Characters, runtime: O(1)
const hasUniqueChars = (word) => {
    const char = {}
    for(let i = 0; i < word.length; i++){
        const charTwo = word[i]
        if (charTwo in char){
            return false
        }
        char[charTwo] = true
    }
    return true
}
console.log(hasUniqueChars("Monday"))
console.log(hasUniqueChars("Moonday"))

// Pangram Sentence, runtime: O(n)
const isPangram = (sentence) => {
    sentence = sentence.toLowerCase()
        for(let letters of 'abcdefghijklmnopqrstuvwxyz'){
            if(!sentence.includes(letters)) {
                return false
            }
        }
        return true;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));

// Longest Word, runtime: 0(1)
const findLongestWord = (words) => {
    let longestWord = 0
    for(let i = 0; i < words.length; i++){
        if(words[i].length > longestWord){
            longestWord = words[i].length
        }
    }
    return longestWord
}
console.log(findLongestWord(["hi", "hello"]))