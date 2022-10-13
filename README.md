# Steven's DiscordBot
This is a discord bot that I created utilising the Node.js and the discord.js node module. The main purpose of creating this bot was just for a little fun and to explore the functionalities of discord.js.

Current functionality of this bot is returning dog and cat images using the following APIs as well as a MemeAPI (that doubles up as a reddit Image API) effectively grabbing any image from reddit.

## How to get this bot working for yourselves
#### To set up the Bot and connect it to your server
* Visit the Discord Developer Portal (https://discord.com/developers/applications), create a new account or login.
* Create a 'New Application' and give it a name. Navigate to 'Bot' and click 'Add Bot'.
* Make sure you save your Token as this will be required for the bot to be able to talk to your Discord Server.
* Under OAuth2, there should be a URL that will redirect you to be able to add the bot to your desired server.

#### To prepare the Bot
* Clone this repo or download the files
* run a 'npm install' to install all the required packages within the packages.json file
* Within the .env file, replace the empty < token params >, with your DISCORd_TOKEN, client ID and guildID, these can be found from the developer portal and the guild ID should be the serverID from dicord.
* run the deploy commands file command, 'node deploy-commands'. This will get every js file from the commands folder and create commands of them.
* Commands can be run by typing in the message "/<commandName>"
