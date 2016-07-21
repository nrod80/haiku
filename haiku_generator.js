var haiku = require('./haiku');
var fivePerms = [[1, 1, 1, 1, 1], [1, 1, 1, 2], [2, 1, 1, 1], [1, 2, 1, 1], [1, 1, 2, 1], [1, 3, 1], [3, 1, 1], [1, 1, 3], [4, 1], [1, 4], [5], [1, 2, 2], [2, 1, 2], [2, 2, 1], [3, 2], [2, 3]];
var sevenPerms = [[1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 2], [2, 1, 1, 1, 1, 1], [1, 2, 1, 1, 1, 1], [1, 1, 2, 1, 1, 1], [1, 1, 1, 2, 1, 1], [1, 1, 1, 1, 2, 1], [1, 1, 1, 1, 3], [3, 1, 1, 1, 1], [1, 3, 1, 1, 1], [1, 1, 3, 1, 1], [1, 1, 1, 3, 1], [1, 1, 1, 4], [4, 1, 1, 1], [1, 4, 1, 1], [1, 1, 4, 1], [1, 1, 5], [1, 5, 1], [5, 1, 1], [6, 1], [1, 6], [1, 1, 1, 2, 2], [2, 2, 1, 1, 1], [1, 2, 2, 1, 1], [1, 1, 2, 2, 1], [1, 2, 2, 2], [2, 1, 2, 2], [2, 2, 1, 2], [2, 2, 2, 1], [3, 2, 1, 1], [3, 1, 2, 1], [3, 1, 1, 2], [1, 3, 2, 1], [1, 1, 3, 2], [2, 3, 1, 1], [2, 1, 3, 1], [2, 1, 1, 3], [1, 2, 3, 1], [1, 3, 2, 1], [4, 2, 1], [4, 1, 2], [1, 2, 4], [2, 1, 4], [1, 4, 2], [2, 4, 1], [5, 2], [2, 5]];
var permutation = [fivePerms[Math.floor(Math.random()*fivePerms.length)].join(","), sevenPerms[Math.floor(Math.random()*sevenPerms.length)].join(","), fivePerms[Math.floor(Math.random()*fivePerms.length)].join(",")];

permutation = permutation.join(",").split(",");

var finalStructure = [];

permutation.forEach(function(num) {
	finalStructure.push(Number(num));
});


haiku.createHaiku(finalStructure);
