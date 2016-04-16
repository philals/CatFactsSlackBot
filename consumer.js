var cat = require('./lib/catclient.js');

cat.getFact(function(fact){
	console.log(fact);
});