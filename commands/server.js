const { description } = require("./ping");

module.exports = {
	name: 'server',
	description: 'check the server',
	execute(message) {
		message.channel.send('I\'m currently on ' + message.channel.name);
	},
};