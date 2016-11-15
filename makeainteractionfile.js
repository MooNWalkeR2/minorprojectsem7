
var fs = require("fs");


var name = ["Raj","Garima","Mayank","Kajol","Mihir","Shekhar","Man","Pan","Mark","Cuban"];
var geo = ["Gujarat","Maharashtra","Gujarat","MP","UP","JK","MP","Gujarat","Maharashtra","UP"];
var analyzer = ["1","2","3","4","5","6","7","8","9","10"];
var age = [18,20,30,65,22,26,45,55,60,70];
var final = "";

for(var i=0;i<100000;i++){
	var randomno = parseInt(Math.random()*10 % 10);
	var randomarticle = parseInt(Math.random()*10 % 10);
	var string = "{" + "\"name\":\"" + name[randomno] + "\",\"age\":" + age[randomno]  + ",\"geo\":\"" + geo[randomno] + "\",\"articleNo\":" + analyzer[randomarticle]  + ",\"timeSpent\":" + (age[randomno]-15) + "}\n"; 
	final += string;
}

fs.appendFile('userInteractionFile.json', final, (err) => {
  if (err) throw err;
  console.log('User interaction file created !');
});