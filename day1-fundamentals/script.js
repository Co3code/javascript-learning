// ============================================
// START HERE: WHAT ARE WE DOING?
// ============================================

// This is a COMMENT - it doesn't run, just explains
// We're learning JavaScript fundamentals today

console.log("🎯 Welcome to JavaScript Learning!");

// ============================================
// PART 1: VARIABLES - BOXES FOR STORING DATA
// ============================================

// WHAT: Variables are like labeled boxes that store information
// WHY: We need to remember data to use later
// HOW: We use 'let' and 'const'

// EXAMPLE 1: let = changeable box
let studentName = "Maria";
console.log("Student name:", studentName);

// We can CHANGE what's in a 'let' box
studentName = "Carlos";
console.log("Updated name:", studentName);

// EXAMPLE 2: const = permanent box (cannot change)
const className = "JavaScript Basics";
console.log("Class:", className);

// Try uncommenting the next line - it will ERROR!
// className = "Advanced JavaScript"; // ERROR! const cannot change

// ============================================
// PART 2: DATA TYPES - DIFFERENT KINDS OF DATA
// ============================================

// JavaScript understands different TYPES of information:

// TYPE 1: String (text)
const greeting = "Hello World";
const favoriteFood = "pizza";

// TYPE 2: Number (integers & decimals)
const age = 25;
const temperature = -5.5;
const price = 19.99;

// TYPE 3: Boolean (true/false)
const isSunny = true;
const isRaining = false;
const canVote = age >= 18; // This becomes true or false

console.log("Data types examples:", {
    greeting, favoriteFood, age, temperature, canVote
});

// ============================================
// PART 3: BASIC MATH OPERATIONS
// ============================================

// Just like calculator operations:
const num1 = 20;
const num2 = 4;

const addition = num1 + num2;        // 20 + 4 = 24
const subtraction = num1 - num2;     // 20 - 4 = 16  
const multiplication = num1 * num2;  // 20 × 4 = 80
const division = num1 / num2;        // 20 ÷ 4 = 5
const remainder = num1 % num2;       // 20 ÷ 4 = 5 remainder 0

console.log("Math results:", {
    addition, subtraction, multiplication, division, remainder
});

// ============================================
// PART 4: STRING OPERATIONS - WORKING WITH TEXT
// ============================================

const firstName = "John";
const lastName = "Smith";

// OLD WAY: String concatenation
const fullNameOld = firstName + " " + lastName;

// NEW WAY: Template literals (easier to read)
const fullNameNew = `${firstName} ${lastName}`;
const welcomeMessage = `Hello ${firstName}, welcome to class!`;

console.log("String examples:", { fullNameOld, fullNameNew, welcomeMessage });

// ============================================
// PART 5: PRACTICAL EXAMPLE - STUDENT PROFILE
// ============================================

// Let's create a REAL example using everything we learned

// Student information
const myName = "Alex";
const myAge = 22;
const myMajor = "Computer Science";
const currentYear = 2024;

// Calculations based on the data
const birthYear = currentYear - myAge;
const yearsUntilGraduation = 4; // Assuming 4-year program
const graduationYear = currentYear + yearsUntilGraduation;

// ============================================
// PART 6: DISPLAYING RESULTS ON WEBPAGE
// ============================================

// Get the output area from our HTML
const outputElement = document.getElementById('output');

// Create content to display
const displayContent = `
    <h2>📚 Student Profile</h2>
    
    <h3>Personal Information</h3>
    <p><strong>Name:</strong> ${myName}</p>
    <p><strong>Age:</strong> ${myAge}</p>
    <p><strong>Major:</strong> ${myMajor}</p>
    <p><strong>Birth Year:</strong> ${birthYear} (calculated: ${currentYear} - ${myAge})</p>
    
    <h3>Academic Information</h3>
    <p><strong>Current Year:</strong> ${currentYear}</p>
    <p><strong>Years Until Graduation:</strong> ${yearsUntilGraduation}</p>
    <p><strong>Expected Graduation:</strong> ${graduationYear}</p>
    
    <h3>Status Checks</h3>
    <p><strong>Can vote:</strong> ${myAge >= 18 ? "Yes ✅" : "No ❌"}</p>
    <p><strong>Is adult:</strong> ${myAge >= 18 ? "Yes ✅" : "No ❌"}</p>
    
    <div style="background: #d4edda; padding: 15px; margin-top: 20px; border-radius: 5px;">
        <h4>💡 What We Learned Today:</h4>
        <ul>
            <li><strong>Variables:</strong> let (changeable) vs const (constant)</li>
            <li><strong>Data Types:</strong> String (text), Number, Boolean (true/false)</li>
            <li><strong>Operations:</strong> Basic math and string combining</li>
           <li><strong>Template Literals:</strong> Modern way to build strings with \${}</li>

        </ul>
    </div>
`;

// Put our content into the webpage
outputElement.innerHTML = displayContent;

// ============================================
// CONSOLE MESSAGES FOR LEARNING
// ============================================

console.log(" ");
console.log("=== 🧠 LEARNING CHECK ===");
console.log("1. Variables: We can store data in 'let' (changeable) and 'const' (constant)");
console.log("2. Data Types: JavaScript understands strings, numbers, and booleans");
console.log("3. Operations: We can do math and combine strings");
console.log("4. We can display results in webpage AND console");
console.log(" ");
console.log("🎉 Great job! Day 1 completed!");