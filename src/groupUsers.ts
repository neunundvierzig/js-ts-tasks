/**
 * Function to categorize users into two groups: EMPLOYEE and CONTRACTOR
 *
 * The function returns an object with two arrays:
 * {
 *   employees: [...],
 *   contractors: [...]
 * }
 * @returns {Object<{ employees: Array<any>, contractors: Array<any> }>}
 */

interface Person {
  type: 'EMPLOYEE' | 'CONTRACTOR';
}

type UserGroups = {
  employees: Person[];
  contractors: Person[];
};

module.exports.organizeUsers = function (list: Person[]): UserGroups {
  const result: UserGroups = { employees: [], contractors: [] };

  for (const individual of list) {
    switch (individual.type) {
      case 'EMPLOYEE':
        result.employees.push(individual);
        break;
      case 'CONTRACTOR':
        result.contractors.push(individual);
        break;
    }
  }

  return result;
};
