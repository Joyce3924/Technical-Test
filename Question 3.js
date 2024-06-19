//Questin three
function mostFrequentChar(input) {
    let charMap = {};

    for (let char of input) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    let maxChar = '';
    let maxCount = 0;
    for (let char in charMap) {
        if (charMap[char] > maxCount) {
            maxChar = char;
            maxCount = charMap[char];
        }
    }
    
    return maxChar;
}
// Test examples
console.log(mostFrequentChar('11189')); 
console.log(mostFrequentChar('hello'));
console.log(mostFrequentChar('apple')); 
console.log(mostFrequentChar('banana'));