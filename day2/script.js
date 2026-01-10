console.log("day 2: function & logic - lets begin!");

function greetStudent() {
  console.log("welcome to my javascript class");
  console.log("we're learning function today");
}
console.log("=== basic function ===");
greetStudent();
greetStudent(); // we can call multiple times

function greetByName(studentName) {
  console.log(`hello ${studentName}, welcone to class`);
}

console.log("===function with parameters === ");
greetByName("anthony");
greetByName("cyan");
greetByName("co3code");

//function with multiple parameters

function introduceStuden(name, age, subject) {
  console.log(`Meet ${name}, whoe is ${age} years old and studies ${subject}`);
}
introduceStuden("anthony", 20, "computer scicece");
introduceStuden("cyan", 22, "Mathematics");

function calculateArea(length, width) {
  const area = length * width;
  return area; // send result back
}

const roomArea = calculateArea(10, 5);
console.log(`Room are: ${roomArea} square meters`);

console.log(`small area :${calculateArea(3, 3)} square meters`);

//practical example

// tempartor converter
function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

function calculateGrade(score, maxScore) {
  const percentage = (score / maxScore) * 100;
  return percentage;
}

console.log("25°C =", celsiusToFahrenheit(25), "°F");
console.log("score  18/20", calculateGrade(18, 20), "%");

//conditional logic making decision

console.log("=== comparison==");
console.log("10 > 5: ", 10 > 5);
console.log("10 < 5: ", 10 < 5);
console.log("10 === 10:", 10 === 10);
console.log("10 !== 5:", 10 !== 5);

//if/else statement
const studentAge = 18;

if (studentAge >= 18) {
  console.log("student is an adult");
} else {
  console.log("student is minor");
}

//if-else statement
const temperature = 25; // this is a variable in javascipt  const meaning constant meaning  connot be change
// let price = 26; // this value can change
// price = 21;
if (temperature > 30) {
  console.log("its so hot outside");
} else {
  console.log("its comfortable weather");
}

// if - else (multiple conditional)

const testScore = 85;

if (testScore >= 90) {
  console.log("Grade: A ");
} else if (testScore >= 80) {
  console.log("Grade: B");
} else if (testScore >= 70) {
  console.log("Grade : C");
} else {
  console.log("grade: F");
}


