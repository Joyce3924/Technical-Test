// Question five
function hasConsecutiveThrees(nums) {
    // Iterate through the array (up to the second last element)
    for (let i = 0; i < nums.length - 1; i++) {
        // Check if the current element and the next element are both 3
        if (nums[i] === 3 && nums[i + 1] === 3) {
            return true; // Found consecutive threes
        }
    }
    
    // If no consecutive threes were found
    return false;
}

// Test examples
console.log(hasConsecutiveThrees([1, 3, 3]));    // Output: true
console.log(hasConsecutiveThrees([1, 3, 1, 3])); // Output: false
console.log(hasConsecutiveThrees([3, 3, 5, 3, 3])); // Output: true
console.log(hasConsecutiveThrees([1, 2, 3, 4, 5])); // Output: false
console.log(hasConsecutiveThrees([3, 3])); // Output: true
console.log(hasConsecutiveThrees([])); // Output: false (empty list)
