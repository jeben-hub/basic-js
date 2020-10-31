const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(options.addition === undefined) options.addition = "";
  if(options.addition === null) options.addition = "null";
  let str_arr = new Array(options.repeatTimes || 1);
  str_arr.fill(str);
  let addition_arr = new Array(options.additionRepeatTimes || 1);
  addition_arr.fill(options.addition);
  return str_arr.map(el => {
    return el + addition_arr.join(options.additionSeparator || "|");
  }).join(options.separator || "+");
};
