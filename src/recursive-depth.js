const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    arr = arr.map(item => {
      return Array.isArray(item) ? this.calculateDepth(item) : 0;
    });
    if(arr.length == 0) return 1;
    return 1 + Math.max.apply(null, arr);
  }
};
