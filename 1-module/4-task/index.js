/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  const copyStr = str.toLowerCase();
  const includes1xBet = copyStr.includes('1xbet');
  const includesXXX = copyStr.includes('xxx');

  return includes1xBet || includesXXX;
}
