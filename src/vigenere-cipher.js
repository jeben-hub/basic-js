const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  VigenereCipheringMachine(flag){
    this.reverse = !flag;
    if(flag == undefined)
      this.reverse = false;
  }
  encrypt(str, key) {
    if(str == undefined || key == undefined) {throw new CustomError("");}
    if(this.reverse) {str = str.reverse();}
    str = training(str);
    key = training(key);
    let k = 0;
    str = str.map((el, i) =>{
      if( el > 90 || el < 65 ) return String.fromCharCode(el);
      let temp = el + key[k] - 65;
      k++;
      if (k >= key.length) k -= key.length;
      if(temp > 90 ) return String.fromCharCode(temp - 26);
      return String.fromCharCode(temp);
    });
    return str.join("");
  }
  decrypt(str, key) {
    if(str == undefined || key == undefined) {throw new CustomError("");}
    if(this.reverse) {str = str.reverse();}
    str = training(str);
    key = training(key);
    let k = 0;
    str = str.map((el, i) =>{
      if( el > 90 || el < 65 ) return String.fromCharCode(el);
      let temp = el - key[k];
      k++;
      if (k >= key.length) k -= key.length;
      if(temp < 0 ) return String.fromCharCode(91 + temp);
      return String.fromCharCode(temp + 65);
    });
    return str.join("");
  }
}

function training(str){
  return str.toUpperCase().split("").map(el => {
    return el.charCodeAt(0);
  });
}


module.exports = VigenereCipheringMachine;
