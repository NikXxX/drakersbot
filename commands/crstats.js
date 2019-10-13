module.exports.run = async (client, message, args) => {
  const { MessageEmbed } = require("discord.js");
  const user = args.join(" ").replace(/#/gi , "");
  if (!user) return message.reply("Utilisation : *crstats <tag>");
  const axios = require("axios");
  axios({
    method: "get",
    url: `https://api.royaleapi.com/player/${user}`,
    headers: {
      auth:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzExMSwiaWRlbiI6IjMyODcyODE3NDUzMzgwNDAzMiIsIm1kIjp7InVzZXJuYW1lIjoiIUNSM1ciLCJkaXNjcmltaW5hdG9yIjoiMTc1NCIsImtleVZlcnNpb24iOjN9LCJ0cyI6MTU3MDI3MTI1NzQ0MH0.UhhSL4tnVQEDcjdpZH8MtIZsuMUlq5zdkMde8xtUvNM"
    },
    responseType: "application/JSON"
  })
    .then(data => {
      const embed = new MessageEmbed()
        .setColor(0x0040ff)
        .setTitle("__Statistiques ClashRoyale__")
        .addField("- `Pseudo` →", data.data.name, true)
        .addField("- `Tag` →", data.data.tag, true)
        .addField("- `Trophées` →", data.data.trophies, true)
        .addField("- `Arène` →", data.data.arena.name, true)
        .addField("- `Clan` →", data.data.clan.name, true)
        .addField("- `Matches Joués` →", data.data.games.total, true)
        .addField("- `Victoires` →", data.data.games.wins, true)
        .addField("- `Matches Perdus` →", data.data.games.losses, true);
      // console.log(data);
      message.channel.send(embed).catch(err => {
        console.log("1");
        message.reply("Utilisateur introuvable");
      });
    })
    .catch(err => {
      console.log("2");
      message.reply("Le site n'est pas accesible");
    });
};
module.exports.config = {
  name: "crstats",
  aliases: [],
  usage: '*crstats <tag>',
  d: "Statistiques d'un joueur Clash Royale"
};