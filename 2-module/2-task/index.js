/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  let numOfFields = 0;
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      numOfFields += 1;
    }
  }
  
  return !numOfFields;
}
