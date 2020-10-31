const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  return members.map(el => {
    try {
      return el.trim().charAt(0).toUpperCase();
    } catch(err) {
      return "";
    }
  }).sort().join("");
};
