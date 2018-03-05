// if odd, 3n + 1
// if even, n/2
// return steps

function countSteps(n) {
  if (n === 1) {
    return 0;
  } else {
    let n2 = 1 + countSteps((n % 2 === 0) ? n / 2 : (3 * n) + 1);
    return n2;
  }
}

function test_countSteps() {
  console.log(countSteps(6));
}

test_countSteps();
