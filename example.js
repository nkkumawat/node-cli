cli = require("./index")

// console.log(cli.yellow("Hello World"))
// console.log(cli.cyan("Hello World"))
// console.log(cli.dim("Hello World"))
// console.log(cli.bright("Hello World"))
// console.log(cli.underscore("Hello World"))
// console.log(cli.reset("Hello World"))
// console.log(cli.blink("Hello World"))
// console.log(cli.reverse("Hello World"))
// console.log(cli.hidden("Hello World"))
// console.log(cli.fgRed("Hello World"))
// console.log(cli.fgBlack("Hello World"))
// console.log(cli.fgGreen("Hello World"))
// console.log(cli.fgYellow("Hello World"))
// console.log(cli.fgBlue("Hello World"))
// console.log(cli.fgMagenta("Hello World"))
// console.log(cli.fgCyan("Hello World"))
// console.log(cli.bgBlack("Hello World"))
// console.log(cli.bgGreen("Hello World"))
// console.log(cli.bgYellow("Hello World"))
// console.log(cli.bgBlue("Hello World"))
// console.log(cli.bgMagenta("Hello World"))
// console.log(cli.bgCyan("Hello World"))
// console.log(cli.bgWhite("Hello World"))

// colors = ["yellow", "red", "blue", "cyan", "white", "green", "mgenta" ]

// sp = (color) => {
// 	spinner = cli.spinner(color)
// 	var percentage = 1;
// 	showSpinner = setInterval(function(){ 
// 		spinner.show(percentage);
// 		percentage += 1;
// 		if(percentage > 100){
// 			console.log("\n");
// 			clearInterval(showSpinner);
// 			sp(colors[Math.floor(Math.random() * 7)])
// 		} 
// 	}, 10);
// }

// sp("blue")

async function sele(){
	selectMenu = cli.selects(['one', 'two', 'three'])
	await selectMenu.show();
}

sele();




