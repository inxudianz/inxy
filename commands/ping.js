module.exports = {
	name: 'ping',
	description: 'ping the bot.',
	execute(message) {
		message.channel.send('pong.');
	},
};