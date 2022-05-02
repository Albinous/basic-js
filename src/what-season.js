const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  const keys = Object.keys(date)
  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error("Invalid date!");
  } else if (keys.length > 0) {
    throw new Error("Invalid date!");
  }
  let dateMonth = date.getMonth()
  if(dateMonth>=0 && dateMonth<=1 || dateMonth === 11) {
    return 'winter';
  }
  else if(dateMonth>=2 && dateMonth<=4) {
    return 'spring';
  }
  else if(dateMonth>=5 && dateMonth<=7) {
    return 'summer';
  }
  else if(dateMonth>=8 && dateMonth<=10) {
    return 'autumn (fall)';
  }
}

module.exports = {
  getSeason
};
