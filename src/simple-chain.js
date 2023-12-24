const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.length
  },
  addLink(value) {
      newValue =  String(value)
    
    if (this.length === 0) this.chain = '( ' + newValue + ' )';
    else this.chain += '~~' + '( ' + newValue + ' )';
    this.length++;
    return this;
  },
  removeLink(position) {
    if (this.length < position) {
      this.finishChain();
      throw new Error("Error");
    }

    if (!(Number.isInteger(position))) {
      this.finishChain();
      throw new Error("Error");
    }

    if (position <= 0) {
      this.finishChain();
      throw new Error("Error");
    }
    this.chain = this.chain.split("~~").filter((elem, i) => i + 1 !== position).join("~~");
    this.length--;
    return this;
  },
  reverseChain() {
    if (this.length !== 0) {
      this.chain = this.chain.split("~~").reverse().join("~~");
    } 
    return this;
  },
  finishChain() {
    const deleteChain = this.chain;
    delete this.chain;
    this.length = 0;
    return deleteChain;
  }
};

module.exports = {
  chainMaker
};
