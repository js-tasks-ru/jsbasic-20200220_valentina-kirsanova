/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let result = data
    .filter(employer => employer.age <= age)
    .map(employer => `${employer.name}, ${employer.age}`);

  return result.join("\n");
}
