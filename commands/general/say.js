//Defining Main Dependencies
const { SlashCommandBuilder } = require("discord.js");

//Slash Command - Say
module.exports = {
    data: new SlashCommandBuilder()
        .setName("say")
        .setDescription("Send a message in chat as the bot!")
        .addStringOption(option =>
            option.setName("message")
                .setDescription("The message to send")
                .setRequired(true))
        .setDMPermission(false),
    async execute (interaction) {
        const message = interaction.options.getString("message") ?? "No Message Provided";
        
        await interaction.reply({ content: "Message Sent!", ephemeral: true });//.then(deleteReply());
        
        await interaction.channel.send({ content: `${message}` });
    }
};