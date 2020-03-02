/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let result = 1;

  for (let i = 0; i <= n; i++) {
    result *= i ? i : 1;
  }

  return result;
}
