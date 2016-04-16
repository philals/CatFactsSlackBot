var Botkit = require('botkit');
var os = require('os');
var _token;
var cat = require('./lib/catclient.js');

var _token = process.env.SLACK_TOKEN
if (!_token) {
  console.error('SLACK_TOKEN is required!')
  process.exit(1)
}

var controller = Botkit.slackbot({
    debug: false,
});

var bot = controller.spawn({
    token: _token
}).startRTM();


controller.hears(['meow'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
    cat.getFact(function(fact){
    	bot.reply(message, fact);
    })
});