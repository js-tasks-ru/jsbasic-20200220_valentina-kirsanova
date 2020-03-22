/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  const parts = str.split('-')
    .map((item, idx) => {
      if (idx === 0) {
        return item;
      }
      const first_letter = item[0].toUpperCase();
      const rest_word = item.slice(1);
      return `${first_letter}${rest_word}`;
    })
    .join('');

  return parts;
}
