module.exports.run = async (client, message, args) => {
  const { MessageEmbed } = require("discord.js");
  const name = args.join(" ");
  if (!name) return message.reply("Veuillez saisir l'adresse ip d'un serveur Minecraft!");

  const axios = require("axios");
  axios({
    method: "get",
    url: `https://eu.mc-api.net/v3/server/ping/${name}`,
    responseType: "application/JSON"
  }).then(data => {
    const embed = new MessageEmbed()
      .setColor("#0040ff")
      .setThumbnail(data.data.favicon)
      .addField("Version : ", data.data.version.name)
      .addField("Joueurs Maximum : ", data.data.players.max)
      .addField("Joueurs en ligne : ", data.data.players.online);
    message.channel.send(embed).catch(err => {
      message.reply("Serveur Introuvable!")
    })
    //console.log(data);
  }).catch(err => {
    message.reply("Serveur Introuvable!")
  });
};
module.exports.config = {
  name: "mcserv",
  aliases: [],
  usage: '*mcserv <ip>',
  d: "Statistiques d'un serveur Minecraft"
};