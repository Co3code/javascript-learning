console.log("Day 3: Arrays & Loops  ");

//Array - LIST - OF DATA

const fruits = ["apple", "banana", "orange", "grape"];
const students = ["Anthony", "Lian", "Cyan", "Kitrian"];

const testScore = ["85", "98", "96", "76"];
const temparature = [24, 15, -5, 30, 22];

// Mixed array (can contain different types)
const mixedArray = ["Anthony", 25, true, "student"];

console.log("=== Array example ===");
console.log("Fruits:", fruits);
console.log("Test Scores:", testScore);

//arrays are Zero-INDEXED (First item is at positiob 0)
console.log(" === Accessin Elements ===");
console.log("First fruit", fruits[0]);
console.log("Second fruit", fruits[1]);
console.log("Third fruit", fruits[2]);
console.log("Last fruit", fruits[3]);

//get arrat length

console.log("number of fruites", fruits.length);

//Access last element dynamically
console.log("Last fruit:", fruits[fruits.length - 1]); 
