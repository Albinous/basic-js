const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isReverse) {
    if (isReverse === undefined) {
        this.isReverse = true;
    } else {
        this.isReverse = isReverse;
    }
  }
  encrypt(message, keycode) {
    if (message === undefined || keycode === undefined) {
      throw new Error('Incorrect arguments!')
    }
    function isUpperCase(letter) {
      let l = letter.charCodeAt();
      if(l>=65 && l<=90){
        return true;
      } else {
        return false;
      }
    }

    function isLowerCase(letter) {
      let l = letter.charCodeAt();
      if(l>=97 && l<=122){
        return true;
      } else {
        return false;
      }
    }

    let cypher = '';
    for(let i=0,j=0;i<message.length;i++) {
      let currentLetter = message[i];
      if (isUpperCase(currentLetter)) {
        let upperLetter = ((currentLetter.charCodeAt()-65) + (keycode[j%keycode.length].toUpperCase().charCodeAt()-65))%26;
        cypher += String.fromCharCode(upperLetter+65);
        j++;
      } else if(isLowerCase(currentLetter)) {
        let lowerLetter = ((currentLetter.toUpperCase().charCodeAt()-65) + (keycode[j%keycode.length].toUpperCase().charCodeAt()-65))%26;
        cypher += String.fromCharCode(lowerLetter+65);
        j++;
      } else {
        cypher += currentLetter;
      }
    }

    return this.isReverse ? cypher : cypher.split('').reverse().join('');
  }
  decrypt(message, keycode) {
    if (message === undefined || keycode === undefined) {
      throw new Error('Incorrect arguments!')
    }
    function isUpperCase(letter) {
      let l = letter.charCodeAt();
      if(l>=65 && l<=90){
        return true;
      } else {
        return false;
      }
    }

    function isLowerCase(letter) {
      let l = letter.charCodeAt();
      if(l>=97 && l<=122){
        return true;
      } else {
        return false;
      }
    }

    let cypher = '';
    for(let i=0,j=0;i<message.length;i++) {
      let currentLetter = message[i];
      if (isUpperCase(currentLetter)) {
        let upperLetter
        if((currentLetter.charCodeAt()-65) - (keycode[j%keycode.length].toUpperCase().charCodeAt()-65)<0) {
          upperLetter = (((currentLetter.charCodeAt()-65) - (keycode[j%keycode.length].toUpperCase().charCodeAt()-65))+26)%26
        } else {
          upperLetter = ((currentLetter.charCodeAt()-65) - (keycode[j%keycode.length].toUpperCase().charCodeAt()-65))%26;
        }
        cypher += String.fromCharCode(upperLetter+65);
        j++;
      } else if(isLowerCase(currentLetter)) {
        let lowerLetter;
        if((currentLetter.toUpperCase().charCodeAt()-65) - (keycode[j%keycode.length].toUpperCase().charCodeAt()-65)<0) {
          lowerLetter = (((currentLetter.toUpperCase().charCodeAt()-65) - (keycode[j%keycode.length].toUpperCase().charCodeAt()-65))+26)%26
        } else {
          lowerLetter = ((currentLetter.toUpperCase().charCodeAt()-65) - (keycode[j%keycode.length].toUpperCase().charCodeAt()-65))%26;
        }
        cypher += String.fromCharCode(lowerLetter+65);
        j++;
      } else {
        cypher += currentLetter;
      }
    }
    return this.isReverse ? cypher : cypher.split('').reverse().join('');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
