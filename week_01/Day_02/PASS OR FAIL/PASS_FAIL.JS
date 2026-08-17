// This is the list of all marks for the students.
// Each number is one student's mark.
const score = [85, 92, 78, 96, 88, 90, 75, 89, 95, 82, 21, 87, 93, 84, 79, 88, 90, 92, 85, 94];

// These variables will count how many students passed and failed.
let passCount = 0;
let failCount = 0;

// This variable stores the total of all marks.
// We need it to calculate the average mark.
let totalMarks = 0;

// This loop checks every mark in the array.
for (let i = 0; i < score.length; i++) {
  // Add the current mark to totalMarks.
  totalMarks += score[i];

  // If the mark is 40 or more, it is a pass.
  if (score[i] >= 40) {
    // Increase passCount because this student passed.
    passCount++;
  } else {
    // If the mark is less than 40, it is a fail.
    // Increase failCount because this student failed.
    failCount++;
  }
}

// Now calculate the average mark.
// The total marks are divided by the number of students.
const averageMarks = totalMarks / score.length;

// Print total number of students.
console.log("Total students:", score.length);

// Print how many students passed.
console.log("Pass count:", passCount);

// Print how many students failed.
console.log("Fail count:", failCount);

// Print the class average.
console.log("Average marks:", averageMarks.toFixed(2));

// Now we check the full class result.
// If all students passed, print this message.
if (passCount === score.length) {
  console.log("Everyone passed.");
}
// If all students failed, print this message.
else if (failCount === score.length) {
  console.log("Everyone failed.");
}
// This is the final condition for the current marks list.
// It will only run if the class result is not all pass or all fail.
else {
  console.log("Everyone passed or everyone failed.");
}
