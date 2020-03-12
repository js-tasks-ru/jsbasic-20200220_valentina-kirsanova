/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let result = [];

  data.forEach((employer) => {
    if (employer.age <= age) {
      const {
        name,
        balance
      } = employer;

      result.push(`${name}, ${balance}`);
    }
  });

  return result.join("\n");
}
