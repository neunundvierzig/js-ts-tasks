/**
 * Write a function which returns a formatter function to format address based on input address data
 * Array 'order' is specifying the format by string index in array.
 * In result address string all entities should be divided with ', ' except the last one (no ', ' at the end)
 * Example:
 * order = ['city', 'street', 'house', 'apartment', 'postalCode', 'country']
 * gives address string like: 'city, street, house, apartment, postalCode, country'
 * @param {Array} order
 * @returns {function}
 */
module.exports.formatAddressWithOrder = function formatAddressWithOrder(order) {
  const func = adress => {
    return `${adress[order[0]]}, ${adress[order[1]]}, ${adress[order[2]]}, ${adress[order[3]]}, ${adress[order[4]]}, ${adress[order[5]]}`;
  };
  return func;
};