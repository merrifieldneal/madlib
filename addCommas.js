// This function takes a number as input and returns a string with commas added for readability. 
// The toLocaleString method automatically formats the number with the appropriate grouping separators based on the user's locale settings.
function addCommas(number) {
    return number.toLocaleString(undefined, { maximumFractionDigits: 3 });
}

// console.log(addCommas(1234));        // Output: "1,234"
// console.log(addCommas(1000000));     // Output: "1,000,000"
// console.log(addCommas(9876543210));  // Output: "9,876,543,210"
// console.log(addCommas(6));           // Output: "6"
// console.log(addCommas(-10));         // Output: "-10"
// console.log(addCommas(-5678));       // Output: "-5,678"
// console.log(addCommas(12345.678));   // Output: "12,345.678"
// console.log(addCommas(-3141592.65)); // Output: "-3,141,592.65"

module.exports = addCommas;