function abs(n) {
  return((n < 0) ? -n : n);
}

function test_abs() {
  let largeTestCase = -(Math.floor(Math.random() * 10E7));
  let decimalTestCase = -(Math.random() * 10);
  console.log("   The absolute value of -5 is: " + abs(-5));
  console.log("   The absolute value of 7 is: " + abs(7));
  console.log("   The absolute value of 0 is: " + abs(0));
  console.log("   The absolute value of " + largeTestCase + " is: " + abs(largeTestCase));
  console.log("   The absolute value of " + decimalTestCase + " is: " + abs(decimalTestCase));
}

function max(x, y) {
  return ((x >= y) ? x : y);
}

function test_max() {
  let largeTestCase1 = -(Math.floor(Math.random() * 10E7));
  let largeTestCase2 = -(Math.floor(Math.random() * 10E7));
  let decimalTestCase1 = -(Math.random() * 10);
  let decimalTestCase2 = -(Math.random() * 10);
  console.log("   The maximum value of the set 3 and 6 is: " + max(3, 6));
  console.log("   The maximum value of the set -3 and -6 is: " + max(-3, -6));
  console.log("   The maximum value of the set 6 and 6 is: " + max(6, 6));
  console.log("   The maximum value of the set " + largeTestCase1 + " and " + largeTestCase2 + " is: " + max(largeTestCase1, largeTestCase2));
  console.log("   The maximum value of the set " + decimalTestCase1 + " and " + decimalTestCase2 + " is: " + max(decimalTestCase1, decimalTestCase2));
}

function min(x, y) {
  return ((x <= y) ? x : y);
}

function test_min() {
  let largeTestCase1 = -(Math.floor(Math.random() * 10E7));
  let largeTestCase2 = -(Math.floor(Math.random() * 10E7));
  let decimalTestCase1 = -(Math.random() * 10);
  let decimalTestCase2 = -(Math.random() * 10);
  console.log("   The minimum value of the set 3 and 6 is: " + min(3, 6));
  console.log("   The minimum value of the set -3 and -6 is: " + min(-3, -6));
  console.log("   The minimum value of the set 6 and 6 is: " + min(6, 6));
  console.log("   The maximum value of the set " + largeTestCase1 + " and " + largeTestCase2 + " is: " + min(largeTestCase1, largeTestCase2));
  console.log("   The maximum value of the set " + decimalTestCase1 + " and " + decimalTestCase2 + " is: " + min(decimalTestCase1, decimalTestCase2));
}

function posOrNeg(n) {
  if (n < 0) {
    console.log("   The value of the number " + n + " is negative.");
  } else if (n > 0) {
    console.log("   The value of the number " + n + " is positive.");
  } else {
    console.log("   The value of the number " + n + " is zero.");
  }
}

function test_posOrNeg() {
  let posTest = Math.floor(10 * Math.random());
  let negTest = -(Math.floor(10 * Math.random()));
  posOrNeg(posTest);
  posOrNeg(negTest);
  posOrNeg(0);
}

function monthName(month) {
  switch (month) {
    case  1: return "January";
    case  2: return "February";
    case  3: return "March";
    case  4: return "April";
    case  5: return "May";
    case  6: return "June";
    case  7: return "July";
    case  8: return "August";
    case  9: return "September";
    case 10: return "October";
    case 11: return "November";
    case 12: return "December";
    default: return "That is not a valid month, please try again.";
  }
}

function test_monthName() {
  let monthNum = Math.floor(13 * Math.random());
  let monthReadable = monthName(monthNum);
  console.log("   The month numbered " + monthNum + " is " + monthReadable);
}

function largestFactor(n) {
  let factor = n-1;
  switch (n) {
    case 0: return 1;
    case 1: return 1;

    default:
      while(n % factor !== 0) {
        factor--;
      }
      return (factor === 1) ? n : factor;
  }
}

function test_largestFactor() {
  let num = Math.floor(100 * Math.random());
  let numFactor = largestFactor(num);
  console.log("   The largest factor of " + 0 + " is " + largestFactor(0) + ".");
  console.log("   The largest factor of " + 1 + " is " + largestFactor(1) + ".");
  console.log("   The largest factor of " + 2 + " is " + largestFactor(2) + ".");
  console.log("   The largest factor of " + 4 + " is " + largestFactor(4) + ".");
  console.log("   The largest factor of " + num + " is " + numFactor + ".");
}

function factorial() {
  let n = Math.floor(100 * Math.random());
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  console.log("   The factorial of " + n + " is " + result);
}

console.log(" ");
console.log("-----Absolute value------------");
test_abs();
console.log(" ");
console.log("-----Max-----------------------");
test_max();
console.log(" ");
console.log("-----Min-----------------------");
test_min();
console.log(" ");
console.log("-----Positive or Negative?-----");
test_posOrNeg();
console.log(" ");
console.log("-----Month Name----------------");
test_monthName();
console.log(" ");
console.log("-----Largest Factor------------");
test_largestFactor();
console.log(" ");
console.log("-----Factorial-----------------");
factorial();
console.log(" ");
console.log(" ");
