/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  const strLength = str.length;
  const longer = strLength > maxlength;

  if (!longer) {
    return str;
  }

  const copyStr = str.slice(0, maxlength - 1);
  return `${copyStr}…`;
}
