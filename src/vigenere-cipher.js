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
  encrypt(message, key) {
    let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numAbc = {};
    for (let i = 0; i < abc.length; i++) {
    numAbc[abc[i]] = i;
    }

    let result = '';
    for(let i = 0; i < message.length; i++) {
      result += abc[(numAbc[message[i]] + numAbc[key[i % key.length]]) % abc.length]
    }
    return result
  }    
  decrypt(message, key) {
    let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numAbc = {};
    for (let i = 0; i < abc.length; i++) {
    numAbc[abc[i]] = i;
    }

    let result = '';
    for(let i = 0; i < message.length; i++) {
      result += abc[(numAbc[message[i]] - numAbc[key[i % key.length]] + abc.length) % abc.length]
    }
    return result
  }
}

module.exports = {
  VigenereCipheringMachine
};
