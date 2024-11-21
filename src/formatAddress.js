/**
 * Write a function which returns a formatter function to format address based on input address data
 * Format should be the following: 'street, house, apartment, city, postal-code, country'
 * @returns {function}
 */
module.exports.formatAddress = function formatAddress() {
  const func = adress => {
    return `${adress.street}, ${adress.house}, ${adress.apartment}, ${adress.city}, ${adress.postalCode}, ${adress.country}`;
  };
  return func;
};