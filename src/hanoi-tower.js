const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns_count = Math.pow(2, disksNumber) - 1;
  return {
    turns: turns_count,
    seconds: parseInt(turns_count / (turnsSpeed / 3600), 10)
  };
};
