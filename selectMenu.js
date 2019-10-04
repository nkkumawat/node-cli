const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

class SelectMenu {
	constructor(options) {
  	this.options = options
  	this.index = options.length;
  	this.length = options.length;
	}
	async show() {
		for(var i =0 ; i < this.options.length; i ++){
			process.stdout.write(this.options[i] + " \n")
		}
		await this.handelEvent();
	}

	handelEvent() {
  	process.stdout.moveCursor(0, -1); 
  	process.stdout.cursorTo(10); 

		return new Promise(resolve => { 
			process.stdin.on('keypress', (str, key) => {
	  		if (key && key.ctrl && key.name == 'c') process.exit();
	  		if(key.name === 'down'){
	  			this.down();
	  		} else if(key.name === 'up'){
	  			this.up();
	  		} else if(key.name === 'return'){
	  			this.index --;
	  			this.selected = this.options[this.index]
	  			process.stdout.moveCursor(0, this.length - this.index); 
  				process.stdout.cursorTo(0); 
	  			process.stdin.setRawMode(false);
	  			resolve();
	  		}
			})
		})
	}
	down() {
		if(this.index < this.options.length){
			this.index += 1
  		process.stdout.moveCursor(0, 1); 
		} else {
			return ;
		}
	}
	up() {
		if(this.index > 1 && this.index <= this.options.length){
			this.index -= 1
  		process.stdout.moveCursor(0, -1); 
		} else {
			return ;
		}
	} 
}

module.exports = SelectMenu;
