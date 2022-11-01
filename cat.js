const axios = require("axios");
const { SlashCommandBuilder } = require("discord.js");
const memer = require('../main')
const { request } = require('undici');
// const { Message, AttachmentBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("cat")
    .setDescription("Returns a cat picture"),
  async execute(interaction) {
    await interaction.deferReply()
    async function getJSONResponse(body) {
        try {
            let fullBody = '';
        
            for await (const data of body) {
                fullBody += data.toString();
            }
            console.log(JSON.parse(fullBody))
        
            return JSON.parse(fullBody);
        } catch (err) {
            console.log(err)
        } 
    }
    const catResult = await request('https://aws.random.cat/meow');
    const { file } = await getJSONResponse(catResult.body);
    console.log(file)
    //const imagecook = new AttachmentBuilder(file);
    interaction.editReply({files: [file] });
  },
};
