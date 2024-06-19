// Questin two
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
// Test examples
console.log(factorial(0)); 
console.log(factorial(150)); 
console.log(factorial(5)); 
console.log(factorial(10)); 
console.log(factorial(400));
console.log(factorial(70));
