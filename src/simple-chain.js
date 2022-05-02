const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain:[],
  getLength() {
    chainMaker.chain.length;
    return this;
  },
  addLink(value) {
    if(value === undefined) {
      this.chain.push(`( )`);
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    let indexArr = [];
    for(let i=1; i<chainMaker.chain.length; i++) {
      if(i === position) {
        this.chain.splice(i-1,1);
      }
      indexArr.push(i);
    }
    
    if(typeof position !== 'number') {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }

    for(let i=0; i<indexArr.length; i++) {
      if(!indexArr.includes(position)) {
        this.chain = [];
        throw new Error('You can\'t remove incorrect link!');
      }
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker
};
