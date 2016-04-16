var request = require('request');

module.exports = {
	getFact: function(callBack){
		request('http://catfacts-api.appspot.com/api/facts', function (error, response, body) {
		  if (!error && response.statusCode == 200) {
		    var fact = JSON.parse(body).facts[0];
		    // console.log(fact)s
		    callBack(fact);
		  }
		})
	}
};