//Activity 1

// Scenario
// Mark and John are trying to compare their Body Mass Indexes (BMI).

// BMI is calculated with the formula:


// Where:

// mass is in kilograms (kg)

// height is in meters (m)

// Test Data 1
// Store Mark's and John's mass and height in variables.
const markMass1 = 70;
const markHeight1 = 1.66;
const johnMass1 = 39;
const johnHeight1 = 1.40;

const markBMI1 = markMass1 / (markHeight1 ** 2);
const johnBMI1 = johnMass1 / (johnHeight1 ** 2);

const markHigherBMI1 = markBMI1 > johnBMI1;

console.log("Test Data 1:");
console.log("Mark's BMI:", markBMI1);
console.log("John's BMI:", johnBMI1);
console.log("Is Mark's BMI higher?", markHigherBMI1);

// -------------------------

// Test Data 2
const markMass2 = 70;
const markHeight2 = 1.66;
const johnMass2 = 39;
const johnHeight2 = 1.40;

const markBMI2 = markMass2 / (markHeight2 ** 2);
const johnBMI2 = johnMass2 / (johnHeight2 ** 2);

const markHigherBMI2 = markBMI2 < johnBMI2;

console.log("Test Data 2:");
console.log("Mark's BMI:", markBMI2);
console.log("John's BMI:", johnBMI2);
console.log("Is Mark's BMI higher?", markHigherBMI2);

