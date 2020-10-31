const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date == undefined) return 'Unable to determine the time of year!';
  let period = parseInt((date.getUTCMonth() + 1) / 3, 10);
  switch (period) {
    case 0:
      return "winter";
    case 1:
      return "spring";
    case 2:
      return "summer";
    case 3:
      return "autumn";
    case 4:
      return "winter";
    default:
      throw new CustomError('');
  }
};
