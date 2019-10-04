# Node CLI Tool



##  Init

```js
const cli = require('node-cli-tool');
```
## Console Colors
###  Colors
```js
console.log(cli.yellow("Hello World"));
console.log(cli.cyan("Hello World"));
console.log(cli.dim("Hello World"));
console.log(cli.bright("Hello World"));
console.log(cli.underscore("Hello World"));
console.log(cli.reset("Hello World"));
console.log(cli.blink("Hello World"));
console.log(cli.reverse("Hello World"));
console.log(cli.hidden("Hello World"));
``` 

### Forground
```js
console.log(cli.fgRed("Hello World"));
console.log(cli.fgBlack("Hello World"));
console.log(cli.fgGreen("Hello World"));
console.log(cli.fgYellow("Hello World"));
console.log(cli.fgBlue("Hello World"));
console.log(cli.fgMagenta("Hello World"));
console.log(cli.fgCyan("Hello World"));
```
### Backgrond
```js
console.log(cli.bgBlack("Hello World"));
console.log(cli.bgGreen("Hello World"));
console.log(cli.bgYellow("Hello World"));
console.log(cli.bgBlue("Hello World"));
console.log(cli.bgMagenta("Hello World"));
console.log(cli.bgCyan("Hello World"));
console.log(cli.bgWhite("Hello World"));
```
## Spinner
```js
colors = ["yellow", "red", "blue", "cyan", "white", "green", "mgenta" ];
var i = 0;
sp = (color) => {
  spinner = cli.spinner(color);
  var percentage = 1;
  showSpinner = setInterval(function(){ 
	spinner.show(percentage);
	percentage += 1;
	if(percentage > 100){
	  console.log("\n");
      i ++;
	  clearInterval(showSpinner);
      if(i == 10) return ;
	  sp(colors[Math.floor(Math.random() * 7)]);
	} 
  }, 10);
}
sp(colors[0])

```
## Select Menu

```js
async function select(){
  var selectMenu = cli.selectMenu(['one', 'two', 'three']);
  await selectMenu.show();
  console.log(cli.yellow(selectMenu.selected));
}
select();
```

## Demo
![Example node-cli](https://raw.githubusercontent.com/nkkumawat/node-cli/master/d.png)