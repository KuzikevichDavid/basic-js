/**
 * Implement chainMaker object according to task description
 * 
 */

class Chain {
  chain = [];

  getLength() {
    return this.chain.length;
  }

  addLink(value) {
    this.chain.push(value);
    return this;
  }

  removeLink(position) {
    if (typeof (position) !== 'number' || (position < 1 || position > this.chain.length)) {
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  }

  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  }

  finishChain() {
    let result = this.chain.map(x => `( ` + x + ` )`).join('~~');
    this.chain = [];
    return result;
  }
}

const chainMaker = {
  getLength() {
    return new Chain().getLength();
  },
  addLink(value) {
    return new Chain().addLink(value);
  },
  removeLink(position) {
    return new Chain().removeLink(position);
  },
  reverseChain() {
    return new Chain().reverseChain();
  },
  finishChain() {
    return new Chain().finishChain();
  }
};

module.exports = {
  chainMaker
};
