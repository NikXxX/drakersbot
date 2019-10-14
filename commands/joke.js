module.exports.run = async (client, message) => {
  const axios = require("axios");
  const { MessageEmbed } = require("discord.js");
  axios({
    method: "get",

    url: "https://blague.xyz/joke/day",

    headers: {
      Authorization:
        "NRVQedO4MWCOJGM7JIHC2VforfHGunZ_SN.LcyzFJqafgHg-ZyJ_cKMK2qqZUZDo"
    },

    responseType: "application/JSON"
  }).then(data => {
    const em = new MessageEmbed()
      .setTimestamp()
      .setThumbnail(
        "https://cdn.discordapp.com/avatars/565671495356121143/49be6a92732b58382c57380c6d6fe9f4.webp?size=512"
      )
      .setFooter(client.user.username, client.user.avatarURL({ format: "png", size: 2048}))
      .setAuthor(message.author.username, message.author.avatarURL({ format: "png", size: 2048}))
      .setTitle("__Blague du jours__")
      .setColor(0x0040ff)
      .setDescription(
        `${data.data.joke.question}\n\n||${data.data.joke.answer}||`
      );

    message.channel.send(em);
  });
};
module.exports.config = {
  name: "joke",
  aliases: [],
  d: "Fait la blague du jours",
  usage: "*joke"
};