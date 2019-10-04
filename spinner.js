
class Spinner {
  constructor(color) {
    this.color = this.colorToText(color);
  }
  colorToText(color) {
  var colorsHash = {
    "yellow" : '\x1b[43m',
    "green" :  '\x1b[42m',
    "blue" : '\x1b[44m',
    "mgenta" : '\x1b[45m',
    "cyan" : '\x1b[46m',
    "white" : '\x1b[47m',
    "red" : '\x1b[41m'
  }
  return colorsHash[color];
  }
  show(percentage) {
    if(percentage > 100){
      return;
    }
    var spaces = Math.floor(percentage);
    var spc = ""
    for (var i = 0; i <= spaces; i++) {
      spc += " "
    }
    spc += percentage;
    process.stdout.cursorTo(0); 
    process.stdout.write(this.color + spc +'\x1b[0m')
  }
}

module.exports = Spinner;