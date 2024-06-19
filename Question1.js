//Questin one
function reverseInteger(num) {
    let numStr = num.toString();
    
    let isNegative = num < 0;

    let reversedStr;
    if (isNegative) {
        reversedStr = '-' + numStr.slice(1).split('').reverse().join('');
    } else {
        reversedStr = numStr.split('').reverse().join('');
    }
    let reversedNum = parseInt(reversedStr);
    return reversedNum;
}
// test results
console.log(reverseInteger(50));    
console.log(reverseInteger(-12));   
console.log(reverseInteger(1234));  
console.log(reverseInteger(-5678)); 
console.log(reverseInteger(9090));     
