/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  let date: Date;
  if (typeof targetDate === 'string') {
    const parts = targetDate.split('.');
    if (parts.length !== 3) {
      throw new Error();
    }

    const day = Number(parts[0]);
    const month = Number(parts[1]);
    const year = Number(parts[2]);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      throw new Error();
    }

    date = new Date(year, month - 1, day);
  } else {
    date = targetDate;
  }

  if (isNaN(date.getTime())) {
    throw new Error();
  }
  const daysLeft = Math.floor((new Date(2024, 0, 1).getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

  return daysLeft;
};
