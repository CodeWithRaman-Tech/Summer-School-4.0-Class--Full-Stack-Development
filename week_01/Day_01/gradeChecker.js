function checkScienceResult(marks) {
  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const percentage = (total / (marks.length * 100)) * 100;

  if (percentage >= 80) {
    return `Distinction! Your percentage is ${percentage.toFixed(2)}%.`;
  } else if (percentage >= 40) {
    return `Pass! Your percentage is ${percentage.toFixed(2)}%.`;
  } else {
    return `Fail! Your percentage is ${percentage.toFixed(2)}%.`;
  }
}

const scienceMarks = [75, 82, 68, 90, 72];
console.log(checkScienceResult(scienceMarks));
