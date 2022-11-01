const axios = require("axios");
const { SlashCommandBuilder } = require("discord.js");
const memer = require('../main')
const { request } = require('undici');
// const { Message, AttachmentBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dog")
    .setDescription("Returns a picture of a much superior animal breed"),
  async execute(interaction) {
    await interaction.deferReply()
    async function getJSONResponse(body) {
        try {
            let fullBody = '';
        
            for await (const data of body) {
                fullBody += data.toString();
            }
            console.log(fullBody.replace(/\\/gm, ''))
            hello = JSON.parse(fullBody.replace(/\\/gm, ''))
        
            return hello;
        } catch (err) {
            console.log(err)
        } 
    }
    const dogResult = await request('https://dog.ceo/api/breeds/image/random');
    const { message, status } = await getJSONResponse(dogResult.body);
    //const imagecook = new AttachmentBuilder(file);
    interaction.editReply({files: [message] });
  },
};