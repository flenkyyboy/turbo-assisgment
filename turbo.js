const n = 7;
const array = [5, 2, 3, 7, 9, 1, 9];
const operations = ["-", "+", "-", "+", "-", "+", "-"];

const expectedArray = [];

//Generate expected output array, Range 1 to N
for (let x = 1; x <= n; x++) {
  expectedArray.push(x);
}

for (let i = 0; i < n; i++) {
  let number = array[i];
  const operationToPerform = operations[i];
  const expectedNumber = expectedArray[i];

  //Skip operation if same number
  if (number == expectedNumber) {
    continue;
  }

  //If provided operation is '-' and provided number is greater than expected number, Reduce it.
  if (number > expectedNumber && operationToPerform == "-") {
    const numberOfTimes = number - expectedNumber;

    const finalNumber = number - numberOfTimes;

    array[i] = finalNumber;
  }

  //If provided operation is '+' and provided number is less than expected number, Sum it.
  if (number < expectedNumber && operationToPerform == "+") {
    const numberOfTimes = expectedNumber - number;

    const finalNumber = number + numberOfTimes;

    array[i] = finalNumber;
  } else if (number > expectedNumber && operationToPerform == "+") {
    //If provided number is greater than expected number and operation is '+',
    // Increment the number until the last digit of it equals expected number,
    // And carry over the first digit.
    let lastDigit = number % 10;

    while (lastDigit !== expectedNumber) {
      number++;
      lastDigit = number % 10;
    }

    const firstDigit = parseInt(number.toString()[0]);
    array[i] = lastDigit;
    array[i + 1] += firstDigit;
  }
}

console.log(arraysEqual(array, expectedArray));

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
