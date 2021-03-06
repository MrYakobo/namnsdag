var data = require('./data.js')

Date.prototype.isLeapYear = function() {
  var year = this.getFullYear();
  if((year & 3) != 0) return false;
  return ((year % 100) != 0 || (year % 400) == 0);
};

// Get Day of Year
Date.prototype.getDOY = function() {
  var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  var mn = this.getMonth();
  var dn = this.getDate();
  var dayOfYear = dayCount[mn] + dn;
  if(mn > 1 && this.isLeapYear()) dayOfYear++;
  return dayOfYear;
};

var exp = {
  today(){
    return data[(new Date()).getDOY()]
  },
  greeting(){
    var a = data[(new Date()).getDOY()]
    if(Array.isArray(a)){
      return `Grattis ${a.join(' och ')} på ${a.length>1?'er':'din'} namnsdag!`
    }
    return `Idag är det ${a} (ingen namnsdag!)`
  },
  date(month, day){
    if(arguments.length === 1){
        //here, month: Date-object
        return data[month.getDOY()]
    }
    if(day > 31 || day <= 0) { return undefined }
    return data[new Date(2017, month-1, day).getDOY()]
  }
}

if(typeof(window) !== 'undefined'){ window.namnsdag = exp }
module.exports = exp
