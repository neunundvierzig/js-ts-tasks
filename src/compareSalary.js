/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
  var list = []
  list.push(firstSalary);
  list.push(secondSalary);
  list.push(thirdSalary);
  return Math.max(...list) - Math.min(...list);
};
