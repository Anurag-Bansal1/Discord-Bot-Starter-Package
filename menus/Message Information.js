//Defining Main Dependencies
const { ContextMenuCommandBuilder, ApplicationCommandType } = require("discord.js");

//Context Menu Command - Message Information
module.exports = {
	data: new ContextMenuCommandBuilder()
		.setName("Message Information")
		.setType(ApplicationCommandType.Message),
	async execute (interaction) {
		await interaction.reply({ content: `${interaction.message}`, ephemeral: true });
	}
};