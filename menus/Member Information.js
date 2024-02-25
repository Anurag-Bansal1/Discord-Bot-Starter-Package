//Defining Main Dependencies
const { ContextMenuCommandBuilder, ApplicationCommandType } = require("discord.js");

//Context Menu Command - Member Information
module.exports = {
	data: new ContextMenuCommandBuilder()
		.setName("Member Information")
		.setType(ApplicationCommandType.User),
	async execute (interaction) {
		targetUser = interaction.targetUser;
		await interaction.reply({ content: `Username: ${targetUser.displayName}`, ephemeral: true });
	}
};