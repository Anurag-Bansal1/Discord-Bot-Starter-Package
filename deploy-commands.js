//Defining Main Dependencies
const { REST, Routes } = require("discord.js");
const { clientId, guildId, token } = require("./config.json");
const path = require("node:path");
const fs = require("node:fs");

//Read Slash Commands in Commands Folder
const commands = [];
const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ("data" in command && "execute" in command) {
			commands.push(command.data.toJSON());
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

//Read Context Menu Commands in Menus Folder
const menus = [];
const menusPath = path.join(__dirname, "menus");
const menuFiles = fs.readdirSync(menusPath).filter(file => file.endsWith(".js"));
for (const file of menuFiles) {
	const filePath = path.join(menusPath, file);
	const menu = require(filePath);
	menus.push(menu.data.toJSON());
}

//Login the Bot
const rest = new REST().setToken(token);

//Register the Commands
const allCommands = [...commands, ...menus];
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} (/) and ${menus.length} context menu application commands.`);
		
		const commandsData = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: allCommands },
		);

		console.log(`Successfully reloaded ${commandsData.length} (/) and context menu application commands.`);
	} catch (error) {
		console.error(error);
	}
})();