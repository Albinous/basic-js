const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str !== 'string') {
    str + ''
  }
  let final = [];
  let additionally = `${options.addition}|`
  let separatorAdd = `${str}${options.separator}`;
  let additionWord = `${str}${options.addition}${options.separator}`;
  let addSep = `${options.addition}${options.additionSeparator}`;
  let addSepFull = `${str}${options.addition}${options.additionSeparator}` + `${options.separator}`
  let addRep;
  let addRepFull;
  let sepsLack;
  let sepLack;
  let addSepLack;
  let lastWrong;
  let repeated;
  if (typeof options.addition !== 'string') {
    options.addition + ''
  }
  if(options.addition!==undefined && options.additionRepeatTimes!==undefined && options.additionSeparator===undefined && options.separator===undefined) {
    sepsLack = `${str}${additionally.repeat(options.additionRepeatTimes).slice(0,-1)}+`
    repeated = sepsLack.repeat(options.repeatTimes).slice(0,-1)
  }
  else if(options.addition!==undefined && options.additionRepeatTimes===undefined && options.additionSeparator===undefined && options.separator===undefined && options.repeatTimes!==undefined) {
    lastWrong = `${str}${options.addition}+`
    repeated = lastWrong.repeat(options.repeatTimes).slice(0,-1)
  }
  else if(options.addition!==undefined && options.additionRepeatTimes!==undefined && options.separator===undefined && options.additionSeparator !==undefined) {
    sepLack = `${str}${addSep.repeat(options.additionRepeatTimes).slice(0,-options.additionSeparator.length)}+`
    repeated = sepLack.repeat(options.repeatTimes).slice(0,-1)
  }
  else if(options.additionRepeatTimes===undefined && options.repeatTimes===undefined) {
    repeated = `${str}${options.addition}`
  }
  else if(options.addition!==undefined && options.additionRepeatTimes!==undefined && options.additionSeparator!==undefined) {
    addRepFull = `${str}${addSep.repeat(options.additionRepeatTimes).slice(0,-options.additionSeparator.length)}${options.separator}`
    repeated = addRepFull.repeat(options.repeatTimes).slice(0,-options.separator.length)
  }
  else if(options.addition!==undefined && options.additionSeparator!==undefined && options.additionRepeatTimes === undefined) {
    repeated = addSepFull.repeat(options.repeatTimes).slice(0,-options.separator.length)
  }
  else if(options.addition!==undefined && options.additionSeparator===undefined && options.additionRepeatTimes !== undefined) {
    addRep = `${str}` + `${additionally.repeat(options.additionRepeatTimes).slice(0,-1)}` + `${options.separator}`
    repeated = addRep.repeat(options.repeatTimes).slice(0,-options.separator.length)
  }
  else if (options.addition!==undefined && options.additionSeparator===undefined && options.additionRepeatTimes === undefined) {
    repeated = additionWord.repeat(options.repeatTimes).slice(0,-options.separator.length)
  } 
  else if(options.separator!==undefined && options.repeatTimes !== undefined) {
    repeated = separatorAdd.repeat(options.repeatTimes).slice(0,-options.separator.length)
  }
  else if(options.separator===undefined && options.repeatTimes !== undefined) {
    separatorDefault = `${str}+`
    repeated = separatorDefault.repeat(options.repeatTimes).slice(0,-1)
  }
  else if(options.addition!==undefined && options.additionRepeatTimes!==undefined && options.additionSeparator===undefined && options.separator !== undefined) {
    addSepLack = `${str}${additionally.repeat(options.additionRepeatTimes).slice(0,-1)}${options.separator}`
    repeated = addSepLack.repeat(options.repeatTimes).slice(0,options.additionSeparator.length)
  }

  options = {
    separator: separatorAdd,
    repeatTimes: repeated,
    addition: additionWord,
    additionRepeatTimes: addRep,
    additionSeparator:addSep
  }
  final.push(repeated)
  return final.join('')
}

module.exports = {
  repeater
};
