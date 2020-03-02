/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  const strCopy = str.slice(1);
  const firstLetter = str.slice(0, 1).toUpperCase();

  return `${firstLetter}${strCopy}`;
}
