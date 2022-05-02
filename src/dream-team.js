const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let name = '';
  if(!Array.isArray(members)) {
    return false
  }
  for(let i=0; i<members.length; i++) {
    if(typeof members[i] === 'string') {
      let firstCh = members[i].split(' ').join('')[0].toUpperCase()
      name += firstCh
    }
  }
  let arr = name.split(''),
  alpha = arr.sort().join('').replace(/\s+/g, '');
  return alpha
}

module.exports = {
  createDreamTeam
};
