const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const turnsCount = Math.floor(2**disksNumber - 1)
  const secondsCount = Math.floor((turnsCount/turnsSpeed)*3600)
  const finalExp = {
    turns: turnsCount,
    seconds: secondsCount
  }
  return finalExp;
}

module.exports = {
  calculateHanoi
};
