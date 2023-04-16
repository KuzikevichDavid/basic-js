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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alhabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.indexes = Array(this.alhabet.length);
    for (let i = 0; i < this.alhabet.length; i++) {
      let char = this.alhabet.charAt(i);
      this.indexes[char] = i;
    }
  }

  baseCrypt(message, key, deCruptFlag = false) {
    message = message.toUpperCase();
    key = key.toUpperCase().split('');
    let res = '';
    for (let i = 0, j = 0; i < message.length; i++, j++) {
      let curLetter = message.charAt(i);
      if (this.alhabet.includes(curLetter)) {
        let operationResult;
        if (!deCruptFlag) {
          operationResult = this.indexes[curLetter] + this.indexes[key[j]];
        } else {
          operationResult = this.indexes[curLetter] - this.indexes[key[j]];
          if (operationResult < 0) {
            operationResult = this.alhabet.length + operationResult;
          }
        }
        let encryptedIndex = operationResult % this.alhabet.length;
        res += this.alhabet.charAt(encryptedIndex);
      } else {
        res += curLetter;
        j--;
      }
      if (j === key.length - 1) {
        j = -1;
      }
    }
    return res;
  }

  reverse(message) {
    return message.split('').reverse().join('');
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    if (this.isDirect) {
      return this.baseCrypt(message, key);
    } else {
      return this.baseCrypt(this.reverse(message), key);
    }
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');
    if (this.isDirect) {
      return this.baseCrypt(encryptedMessage, key, true);
    } else {
      return this.baseCrypt(this.reverse(encryptedMessage), key, true);
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
