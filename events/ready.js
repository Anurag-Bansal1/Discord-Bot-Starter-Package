//Defining Main Dependencies
const { Events, ActivityType } = require("discord.js");

//On Bot Ready
module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
	}
};