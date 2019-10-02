const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

module.exports = {
	yellow: (text) => {
		return '\x1b[33m'+ text +'\x1b[0m';
	},
	cyan: (text) => {
		return '\x1b[36m'+ text +'\x1b[0m';
	},
	dim: (text) => {
		return '\x1b[2m' + text +'\x1b[0m';
	},
	reset: (text) => {
		return '\x1b[0m' + text +'\x1b[0m';
	},
	bright: (text) => {
		return '\x1b[1m' + text +'\x1b[0m';
	},
	underscore: (text) => {
		return '\x1b[4m' + text +'\x1b[0m';
	},
	blink: (text) => {
		return '\x1b[5m' + text +'\x1b[0m';
	},
	reverse: (text) => {
		return '\x1b[7m' + text +'\x1b[0m';
	},
	hidden: (text) => {
		return '\x1b[8m' + text +'\x1b[0m';
	},
	fgBlack: (text) => {
		return '\x1b[30m' + text +'\x1b[0m';
	},
	fgRed: (text) => {
		return '\x1b[31m' + text +'\x1b[0m';
	},
	fgGreen: (text) => {
		return '\x1b[32m' + text +'\x1b[0m';
	},
	fgYellow: (text) => {
		return '\x1b[33m' + text +'\x1b[0m';
	},
	fgBlue: (text) => {
		return '\x1b[34m' + text +'\x1b[0m';
	},
	fgMagenta: (text) => {
		return '\x1b[35m' + text +'\x1b[0m';
	},
	fgBlue: (text) => {
		return '\x1b[36m' + text +'\x1b[0m';
	},
	fgCyan: (text) => {
		return '\x1b[37m' + text +'\x1b[0m';
	},
	bgBlack: (text) => {
		return '\x1b[40m' + text +'\x1b[0m';
	},
	bgRed: (text) => {
		return '\x1b[41m' + text +'\x1b[0m';
	},
	bgGreen: (text) => {
		return '\x1b[42m' + text +'\x1b[0m';
	},
	bgYellow: (text) => {
		return '\x1b[43m' + text +'\x1b[0m';
	},
	bgBlue: (text) => {
		return '\x1b[44m' + text +'\x1b[0m';
	},
	bgMagenta: (text) => {
		return '\x1b[45m' + text +'\x1b[0m';
	},
	bgCyan: (text) => {
		return '\x1b[46m' + text +'\x1b[0m';
	},
	bgWhite: (text) => {
		return '\x1b[47m' + text +'\x1b[0m';
	},
	spinner: (color) => {
		return new Spinner(color);
	},
	selects: (options) => {
		return new Select(options);
	}
}

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

class Select {
	constructor(options) {
  	this.options = options
  	this.line = options.length;
	}
	show() {
		for(var i =0 ; i < this.options.length; i ++){
			process.stdout.write(this.options[i] + " \n")
		}
		process.stdin.on('keypress', (str, key) => {
  		if (key && key.ctrl && key.name == 'c') process.exit();
  		if(key.name === 'down'){
  			this.down();
  		} else if(key.name === 'up'){
  			this.up();
  		} else if(key.name === 'return'){
  			this.selected = this.options[this.line]

  			process.stdout.moveCursor(0, this.options.length - this.line); 
  			console.log(this.selected)
  			process.stdin.setRawMode(false);
  			return;
  		}
		})
	}
	down() {
		if(this.line < this.options.length){
			this.line += 1
  		process.stdout.moveCursor(0, 1); 
		} else {
			return ;
		}
	}
	up() {
		if(this.line >= 1 && this.line <= this.options.length){
			this.line -= 1
  		process.stdout.moveCursor(0, -1); 
		} else {
			return ;
		}
	} 
}





