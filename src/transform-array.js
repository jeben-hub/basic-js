const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let temp = [];
  arr.forEach(el => { temp.push(el); });

  temp.forEach((item, i) => {
    switch (item) {
      case "--discard-next":
        if(i == temp.length - 1) {temp[i] = undefined; break;}
        temp[i + 1] = temp[i] = undefined;
        break;
      case "--discard-prev":
        if(i == 0) {temp[i] = undefined; break;}
        temp[i - 1] = temp[i] = undefined;
        break;
      case "--double-next":
        if(i == temp.length - 1) {temp[i] = undefined; break;}
        temp[i] = temp[i + 1] || undefined;
        break;
      case "--double-prev":
        if(i == 0) {temp[i] = undefined; break;}
        temp[i] = temp[i - 1] || undefined;
        break;
    }
    temp.filter(el => el != undefined);
  });
  return temp.filter(el => el != undefined);
};
