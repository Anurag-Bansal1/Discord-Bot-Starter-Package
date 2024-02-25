//Defining Main Dependencies
const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require("discord.js");

//Slash Command - Purge
module.exports = {
    data: new SlashCommandBuilder()
	    .setName("purge")
    	.setDescription("Purge multiple messages!")
    	.addIntegerOption(option =>
            option.setName("count")
                .setDescription("Number of messages to be deleted")
                .setMinValue(1)
                .setMaxValue(100)
			    .setRequired(true))
    	.setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
	    .setDMPermission(false),
	async execute(interaction) {
		const count = interaction.options.getInteger("count");
		
		try {
			const deletedMessages = await interaction.channel.bulkDelete(count, true);
			await interaction.reply({ content: `${deletedMessages.size} Messages Deleted!`, ephemeral: true });
		} catch (error) {
			await interaction.reply({ content: "You cannot delete messages older than 14 days!", ephemeral: true });
		}
	}
};