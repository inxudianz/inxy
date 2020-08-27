module.exports = {
	name: 'server',
	alias: [],
	description: 'check the server',
	cooldown: 1,
	usage: '',
	guildOnly: true,
	execute(message) {
		message.channel.send(`I'm currently on ${message.channel.name}`);
	},
};