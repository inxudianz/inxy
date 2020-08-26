const Discord = require('discord.js');

const config = require('./config.json');
const client = new Discord.Client;

client.once('ready', () => {
	console.log('ready');
});

client.on('message', message => {
	if (message.content === config.prefix + 'ping') {
		message.channel.send('Pong.');
	} else if (message.content === config.prefix + 'server') {
		message.channel.send('Hey, I\'m currently on ' + message.guild.name);
	}
});
client.login(config.token);