const myList = [
  ["Chocolate Bar", 15],
  ["Apples", 10],
  ["Milk", 2],
  ["Bread", 3],
  ["Eggs", 12]
];

myList.forEach(item => {
  console.log(`${item[0]}: ${item[1]}`);
});

function processArg(num) {
  return (num - 3) / 2;
}

const processed = processArg(7); // => 2

processed; // ✅ Quokka will display the value right here: 2


function nextInLine(arr, item) {
  arr.push(item);      // Add item to the end of array
  return arr.shift();  // Remove and return first item
}

// Setup
function nextInLine(arr, item) {
  arr.push(item);        // Add the item to the end of the array
  const last = arr[arr.length - 1]; // Example use of pop (not removing here)
  const removed = arr.shift();      // Remove the first item
  return removed;
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Output
console.log("Before:", JSON.stringify(testArr));
const removedItem = nextInLine(testArr, 6);
console.log("Removed:", removedItem);
console.log("After:", JSON.stringify(testArr));
 

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}

// Example calls
console.log(testSize(0));   // Output: Tiny
console.log(testSize(7));   // Output: Small
console.log(testSize(13));  // Output: Medium
console.log(testSize(17));  // Output: Large
console.log(testSize(25));  // Output: Huge


function golfScore(par, strokes) {
  if (strokes === 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes === par - 1) {
    return "Birdie";
  } else if (strokes === par) {
    return "Par";
  } else if (strokes === par + 1) {
    return "Bogey";
  } else if (strokes === par + 2) {
    return "Double Bogey";
  } else if (strokes >= par + 3) {
    return "Go Home!";
  }
}

// ⛳ Sample Tests:
console.log(golfScore(4, 1));  // "Hole-in-one!"
console.log(golfScore(4, 2));  // "Eagle"
console.log(golfScore(4, 3));  // "Birdie"
console.log(golfScore(4, 4));  // "Par"
console.log(golfScore(4, 5));  // "Bogey"
console.log(golfScore(4, 6));  // "Double Bogey"
console.log(golfScore(4, 7));  // "Go Home!"
