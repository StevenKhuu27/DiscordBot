const axios = require("axios");
const { SlashCommandBuilder } = require("discord.js");
const memer = require('../main')
const { request } = require('undici');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("meme")
    .setDescription("Returns a meme"),
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
    const memeResult = await request('https://meme-api.herokuapp.com/gimme');
    const { url, subreddit, title } = await getJSONResponse(memeResult.body);
    interaction.editReply({ files: [url] });
    interaction.followUp(`This fine meme is from the ${subreddit} subreddit and is named ${title}`)
  },
};