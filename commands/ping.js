module.exports = {
	name: 'ping',
	alias: [],
	description: 'ping the bot.',
	cooldown: 1,
	usage: '',
	guildOnly: false,
	execute(message) {
		message.channel.send('pong.');
	},
};