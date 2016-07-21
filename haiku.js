function createHaiku(structure) {
	var sylArray = formatData(cmudictFile);
	var phrase = "";
	var sylCount = 0;
	structure.forEach(function(syllables) {
		if(sylCount < 17) {
			var words = sylArray[syllables];
			sylCount += syllables;
			phrase += words[Math.floor(Math.random()*words.length)] + " ";
			if((sylCount === 5) || (sylCount === 12)) {
				phrase += '\n';	
			};
		};
		 
	});
	console.log(phrase);
}




var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function formatData(data){    
	var lines = data.toString().split("\n"),
    	lineSplit,
    	wordArray = [],
    	sylArray = []
    lines.forEach(function(line){    
    	lineSplit = line.split("  ");    
    	wordArray.push(lineSplit);
  	});
  	wordArray.forEach(function(word) {
  		if(word[0].match(/[0-9]/g)) {
  			word[1] = 0;
  		}
  		else if((word[1] !== undefined) && (word[1].match(/[0-9]/g) !== null)) {
  			word[1] = word[1].match(/[0-9]/g).length;
  		}
  		else {
  			word[1] = 0;
  		}
  	});
  	wordArray.forEach(function(word) {
  		var syl = word[1];
  		if(sylArray[syl] === undefined) {
  			sylArray[syl] = [];
  		}
  		sylArray[syl].push(word[0]);
  	});
  	return sylArray;
}






module.exports.createHaiku = createHaiku
