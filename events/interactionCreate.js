//Defining Main Dependencies
const { Events } = require("discord.js");

//Execute Command Interactions
module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		//If the interaction is a command, execute the command
		if (interaction.isChatInputCommand()) {
			const command = interaction.client.commands.get(interaction.commandName);
			
			if (!command) {
				console.error(`No command matching ${interaction.commandName} was found.`);
				return;
			}
			
			try {
				await command.execute(interaction);
			} catch (error) {
				console.error(error);
				if (interaction.replied || interaction.deferred) {
					await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
				} else {
					await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
				}
			}
		}
		
		//If the interaction is a context menu command, execute the command
		if (interaction.isContextMenuCommand()) {
			const menu = interaction.client.menus.get(interaction.commandName);
			if (!menu) return;
			try {
				await menu.execute(interaction);
			} catch (error) {
				console.error(error);
				await interaction.reply({ content: "There was an error while executing this command!", ephemeral: true });
			}
		}
	}
};