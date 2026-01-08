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
