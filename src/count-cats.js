const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(item => {
    count += item.filter(el => el == "^^").length;
  });
  return count;
};
