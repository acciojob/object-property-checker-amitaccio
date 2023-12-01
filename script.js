// Define the sampleObject
const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

// Function to check if key exists in sampleObject
function hasKey(key) {
  return Object.prototype.hasOwnProperty.call(sampleObject, key);
}

// Test the function
console.log(hasKey('red')); // Output: true
console.log(hasKey('blue')); // Output: false

