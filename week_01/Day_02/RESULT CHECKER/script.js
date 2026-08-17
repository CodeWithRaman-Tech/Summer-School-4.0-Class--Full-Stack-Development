function checkResult() {
  const marks = [
    Number(document.getElementById('m1').value),
    Number(document.getElementById('m2').value),
    Number(document.getElementById('m3').value),
    Number(document.getElementById('m4').value),
    Number(document.getElementById('m5').value)
  ];

  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const percentage = (total / 500) * 100;

  let resultText = '';

  if (percentage < 40) {
    resultText = `Fail! Your percentage is ${percentage.toFixed(2)}%.`;
  } else if (percentage >= 40 && percentage < 80) {
    resultText = `Pass! Your percentage is ${percentage.toFixed(2)}%.`;
  } else {
    resultText = `Distinction! Your percentage is ${percentage.toFixed(2)}%.`;
  }

  document.getElementById('result').textContent = resultText;
}
