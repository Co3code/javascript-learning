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

//get array length
console.log("number of fruites", fruits.length);

//Access last element dynamically
console.log("Last fruit:", fruits[fruits.length - 1]);

//array declared with 'let' can be modified
let shoppingList = ["milk", "bread", "eggs"];

//add  to end
shoppingList.push("butter");
console.log("after push", shoppingList); // adding butter to the end

//remove from end
shoppingList.pop();
console.log("after pop:", shoppingList); // removing butter to the end

//add to beginning
shoppingList.unshift("coffee");
console.log("after unshift", shoppingList); // adding fro biginning

shoppingList.shift();
console.log("after shift", shoppingList); //removing again

//modify specific element

shoppingList[1] = "whole wheat bread";
console.log("after modification", shoppingList);

// LOOPS REPEATING ACTIONS

console.log("=== FOR LOOP ===");

//classic loop when you know how many times to repeat
for (let i = 0; i < 5; i++) {
  console.log(`count: ${i}`);
}

// loop through array with for loop
console.log("== looping through fruits==");
for (let i = 0; i < fruits.length; i++) {
  console.log(`${i + 1}. ${fruits[i]}`);
}

//Modern way to lopp through arrays
console.log("== for..of loop ==");
for (const fruit of fruits) {
  console.log(`i like ${fruit}`);
}

// WHILE LOOP

//when you don't know how many time to repeat
console.log("=== While Loop ===");

let counter = 0;
while (counter < 3) {
  console.log(`While counter: ${counter}`);
  counter++; // Don't forget this or infinite loop!
}

// DO ... WHILE LOOP

//Run at least once, then checks condition
console.log("== Do...while loop == ");
let attempts = 0;
do {
  console.log(`attempt #${attempts + 1}`);
} while (attempts < 3);

const number = [1, 2, 3, 4, 5];
