//Defining Main Dependencies
const { REST, Routes } = require("discord.js");
const { clientId, guildId, token } = require("./config.json");

//Login the Bot
const rest = new REST().setToken(token);

//Delete Command by Command ID
rest.delete(Routes.applicationGuildCommand(clientId, guildId, "ID"))
	.then(() => console.log("Successfully deleted guild command"))
	.catch(console.error);