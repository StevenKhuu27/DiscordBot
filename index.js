require('dotenv').config()

const { channel } = require('diagnostics_channel')
const { Client, GatewayIntentBits, channelLink, Collection } = require('discord.js')
const { REST, Routes } = require('discord.js')
const fs = require('fs')
const path = require('node:path')
const commandHandler = require('./command-handler')

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages,  GatewayIntentBits.GuildMessages]})
// https://discord.com/developers/docs/topics/gateway#list-of-intents

client.commands = new Collection()
//command js files
const commandsPath = path.join(__dirname,'commands')
const commandFiles = fs.readdirSync(commandsPath).filter( file => file.endsWith('.js'))

//populate the command map and array
for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file)
  const command = require(filePath)
  client.commands.set(command.data.name, command)
}


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', commandHandler.command );

// client.on('messageCreate', (msg) => {
//   interval = setInterval( () => {
//     console.log("hi")
//     msg.send({content: "Yep, so thats the sitch"})
//   }, 5000)
//   console.log(msg)
// })

client.login(process.env.DISCORD_TOKEN);