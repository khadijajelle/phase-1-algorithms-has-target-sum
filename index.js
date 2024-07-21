function hasTargetSum(arr, target) {
  // Set to store numbers we have seen so far
  const seenNumbers = new Set();

  // Iterate through the array
  for (let num of arr) {
    // Calculate the complement needed to reach the target
    const complement = target - num;

    // Check if complement exists in the set
    if (seenNumbers.has(complement)) {
      return true; // Found a pair that sums to the target
    }

    // Add current number to the set
    seenNumbers.add(num);
  }

  // If no pair found, return false
  return false;
}

// Example usage and tests (optional)
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25)); // true
  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4)); // false
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3)); // true
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5)); // true
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4)); // true
  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4)); // false
}

module.exports = hasTargetSum;
