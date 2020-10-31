const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity != "string") return false;
  sampleActivity = parseFloat(sampleActivity);
  if(isNaN(sampleActivity) || sampleActivity >= 15 || sampleActivity <= 0)
    return false;
  let tk = Math.log(MODERN_ACTIVITY/sampleActivity),
      k = Math.log(2) / HALF_LIFE_PERIOD;
  return Math.ceil( tk / k);
};
