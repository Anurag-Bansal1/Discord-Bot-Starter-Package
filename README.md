# Discord Bot Starter Package

This is a simple and easy-to-use starter package for creating discord bots using discord.js. It includes the basic setup and structure for creating slash commands and context menu commands, as well as handling events.

## License

This project is open source and available under the MIT License.

## Requirements

- Node.js
- A discord account and a bot application
- A text editor or IDE of your choice

## Installation

1. Create a new folder and copy the contents of `Discord Bot Starter Package` folder to it.
2. Open a terminal or command prompt and navigate to the folder you created.
3. Run `npm init` and follow the prompts to initialise the project and create a package.json file.
4. Run `npm i discord.js` to install the discord.js library in the same folder as index.js (The main file).
5. Open the `config.json` file and fill in your bot's token, clientId and guildId. You can find these values in the Discord Developer Portal, guildId is found in Discord (You need developer mode).
6. Run `node deploy-commands.js` to register your commands with the Discord API. You only need to do this once or whenever you add or modify your commands.
7. Run `node index.js` to start your bot and log in to Discord.

## Usage

Your bot is now ready to use. You can test your commands by typing `/` in any channel where your bot has permission to send messages. You can also right-click on a user or a message to see the context menu commands.

## Structure

This starter package follows a simple and modular structure for organizing your commands and events. All your commands are stored in sub-folders inside the `commands` folder. The `menus` folder contains the context menu commands. Each command has its own file with the same name as the command. Each file exports an object with the following properties:

- `name`: The name of the command (required).
- `description`: The description of the command (required).
- `options`: The options or parameters of the command (optional).
- `permissions`: An array of permission objects that specify which roles or users can use the command (optional).
- `execute`: The function that runs when the command is executed. It takes two parameters: `interaction`, which is the interaction object from discord.js, and `client`, which is the client object from discord.js (required).
- `type`: The type of the command, `User` or `Message` for context menu commands (required).

All your events are stored in the `events` folder. Each event has its own file with the same name as the event. Each file exports a function that runs when the event is emitted.

You can add, remove, or modify any command or event as you wish. Just make sure to follow the same structure and naming convention as the existing ones.

## Support

If you have any questions, issues, feel free to seek help at https://discord.com/invite/djs. You can also check out the discord.js documentation at https://discordjs.guide/ for more information and examples.

## Credits

This package was created by Anurag Bansal. It uses the discord.js library, which is developed and maintained by the Discord.js team.