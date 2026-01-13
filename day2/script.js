// ============================================
// DAY 2: FUNCTIONS & CONDITIONAL LOGIC
// ============================================

console.log(" Day 2: Functions & Logic - Let's begin!");

// ============================================
// PART 1: FUNCTIONS - REUSABLE CODE BLOCKS
// ============================================

// WHAT: Functions are like mini-programs that do specific tasks
// WHY: Avoid repeating code, organize logic, make code readable
// HOW: We define functions and then "call" them when needed

// TYPE 1: Basic Function

// FUNCTION DECLARATION (defining the function)
function greetStudent() {
  console.log("Hello, welcome to JavaScript class!");
  console.log("We're learning functions today!");
}

// FUNCTION CALL (using the function)
console.log("=== Basic Function ===");
greetStudent(); // This runs all the code inside greetStudent
greetStudent(); // We can call it multiple times!

// ====================
// TYPE 2: Function with Parameters
// ====================

// Parameters are inputs the function receives
function greetByName(studentName) {
  console.log(`Hello ${studentName}, welcome to class!`);
}

console.log("=== Function with Parameters ===");
greetByName("Anthony");
greetByName("Cyan");
greetByName("Lian");

// Function with multiple parameters
function introduceStudent(name, age, subject) {
  console.log(`Meet ${name}, who is ${age} years old and studies ${subject}`);
}

introduceStudent("Anthony", 22, "Computer Science");
introduceStudent("Lian", 20, "Mathematics");

// ====================
// TYPE 3: Function with Return Values
// ====================

// Functions can GIVE BACK results using 'return'
function calculateArea(length, width) {
  const area = length * width;
  return area; // Sends the result back
}

// Using the returned value
const roomArea = calculateArea(10, 5);
console.log(`Room area: ${roomArea} square meters`);

// We can use returned values directly
console.log(`Small area: ${calculateArea(3, 3)} square meters`);

// ====================
// TYPE 4: Practical Examples
// ====================

// Temperature converter
function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

// Grade calculator
function calculateGrade(score, maxScore) {
  const percentage = (score / maxScore) * 100;
  return percentage;
}

// Using our practical functions
console.log("25°C =", celsiusToFahrenheit(25), "°F");
console.log("Score 18/20 =", calculateGrade(18, 20), "%");

// ============================================
// PART 2: CONDITIONAL LOGIC - MAKING DECISIONS
// ============================================

// WHAT: Code that runs only under certain conditions
// WHY: Programs need to make decisions based on data
// HOW: Using if, else if, else statements

// ====================
// COMPARISON OPERATORS
// ====================

// >   greater than
// <   less than
// >=  greater than or equal to
// <=  less than or equal to
// === equal to (strict)
// !== not equal to

console.log("=== Comparison Examples ===");
console.log("10 > 5:", 10 > 5); // true
console.log("10 < 5:", 10 < 5); // false
console.log("10 === 10:", 10 === 10); // true
console.log("10 !== 5:", 10 !== 5); // true

// ====================
// IF/ELSE STATEMENTS
// ====================

// Basic if statement
const studentAge = 18;

if (studentAge >= 18) {
  console.log("Student is an adult ");
}

// if-else statement
const temperature = 25;

if (temperature > 30) {
  console.log("It's hot outside! ");
} else {
  console.log("It's comfortable weather ");
}

// if-else if-else (multiple conditions)
const testScore = 85;

if (testScore >= 90) {
  console.log("Grade: A ");
} else if (testScore >= 80) {
  console.log("Grade: B "); // This will run
} else if (testScore >= 70) {
  console.log("Grade: C ");
} else {
  console.log("Grade: F ");
}

// ============================================
// PART 3: COMBINING FUNCTIONS & CONDITIONALS
// ============================================

// This is where it gets powerful!

function getGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}

function canVote(age) {
  if (age >= 18) {
    return "Yes, you can vote! ";
  } else {
    const yearsLeft = 18 - age;
    return `No, wait ${yearsLeft} more year(s) `;
  }
}

function getWeatherAdvice(temperature, isRaining) {
  if (temperature > 30 && !isRaining) {
    return "It's hot! Wear light clothes and sunscreen ";
  } else if (temperature < 10) {
    return "It's cold! Wear a jacket ";
  } else if (isRaining) {
    return "It's raining! Bring an umbrella ";
  } else {
    return "Nice weather! Enjoy your day ";
  }
}

// ============================================
// PART 4: PRACTICAL PROJECT - STUDENT GRADER
// ============================================

function calculateStudentGrade(studentName, mathScore, scienceScore, englishScore) {
  // Calculate average
  const average = (mathScore + scienceScore + englishScore) / 3;

  // Determine grade letter
  let grade;
  if (average >= 90) grade = "A";
  else if (average >= 80) grade = "B";
  else if (average >= 70) grade = "C";
  else if (average >= 60) grade = "D";
  else grade = "F";

  // Determine status
  let status;
  if (average >= 70) {
    status = "PASS ✅";
  } else {
    status = "FAIL ❌";
  }

  // Return student report
  return {
    name: studentName,
    average: average.toFixed(1),
    grade: grade,
    status: status,
  };
}

const outputElement = document.getElementById("output");

// Test our functions
const student1 = calculateStudentGrade("Anthony", 85, 92, 78);
const student2 = calculateStudentGrade("Cyan " , 45, 60, 55);
const student3 = calculateStudentGrade("Lian", 95, 88, 92);

// Test other functions
const votingEligibility = canVote(17);
const weatherAdvice = getWeatherAdvice(25, false);

const displayContent = `
  <h2>  Student Grading System </h2>
  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin: 20px 0;">
        <div style="background: #e8f5e8; padding: 15px; border-radius: 8px;">
            <h3>${student1.name}</h3>
            <p><strong>Average:</strong> ${student1.average}%</p>
            <p><strong>Grade:</strong> ${student1.grade}</p>
            <p><strong>Status:</strong> ${student1.status}</p>
        </div>

        <div style="background: #fff3cd; padding: 15px; border-radius: 8px;">
            <h3>${student2.name}</h3>
            <p><strong>Average:</strong> ${student1.average}%</p>
            <p><strong>Grade:</strong> ${student1.grade}</p>
            <p><strong>Status:</strong> ${student1.status}</p>
        </div>

        <div style="background: #e8f5e8; padding: 15px; border-radius: 8px;">
            <h3>${student3.name}</h3>
            <p><strong>Average:</strong> ${student1.average}%</p>
            <p><strong>Grade:</strong> ${student1.grade}</p>
            <p><strong>Status:</strong> ${student1.status}</p>
        </div>
  </div>
  <h3> function Demonstrations </h3>

  
    <div style="background-color: #f0f0f0; padding: 15px; border-radius: 8px; margin: 15px 0;"></div>
    <h4>Voting Eligibility Check (age 17):</h4>
        <p>${votingEligibility}</p>
  

    <h4>Weather Advice (25°C, No Rain):</h4>
        <p>${weatherAdvice}</p>
        
        <h4>Temperature Conversion:</h4>
        <p>25°C = ${celsiusToFahrenheit(25)}°F</p>
    
        </div>
      <div style="background: #d4edda; padding: 20px; border-radius: 8px; margin-top: 20px;">
        <h4>💡 Today's Key Learnings:</h4>
        <ul>
            <li><strong>Functions:</strong> Reusable code blocks that can take inputs (parameters) and return outputs</li>
            <li><strong>Conditional Logic:</strong> Using if/else to make decisions in code</li>
            <li><strong>Comparison Operators:</strong> How to compare values (>, <, ===, etc.)</li>
            <li><strong>Return Statements:</strong> How functions give back results</li>
        </ul>
        
        <h4>🎯 Practice Exercise:</h4>
        <p>Try creating a function that calculates BMI (Body Mass Index) using: <code>BMI = weight / (height * height)</code></p>
        <p>Then add conditional logic to categorize: Underweight, Normal, Overweight, Obese</p>
    </div>
`;


outputElement.innerHTML = displayContent; 