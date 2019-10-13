const Client = require("fortnite");
const lang = require('../lang/fr.json').fnstats
const fortnite = new Client("0cdc3b8d-0f31-44e4-bd6a-47afe459b55f");
const { MessageEmbed } = require("discord.js");
module.exports.run = (client, message, args) => {
    const name = args.join(" ")
    if (name === undefined)  {
      return ("Veuillez saisir le pseudo d'un joueur fortnite!")
    };
    fortnite.user(name).then(data => {
      const stats = data.stats;
      const lt = stats.lifetime;

      const embed = new MessageEmbed()
        .setTitle(lang.title)
        .setColor('0040ff')
        .addField(lang.nom, `**${data.username}**`, true)
        .addField(lang.id, `**${data.id}**`, true)
        .addField(lang.kd, `**${lt.kd}**` || '0', true)
        .addField(lang.kill, `**${lt.kills}**` || '0', true)
        .addField(lang.match, `**${lt.matches}**` || '0', true)
        .addField(lang.top1, `**${lt.wins}**` || '0', true)
        .addField(lang.top3, `**${lt.top_3}**` || '0', true)
        .addField(lang.top5, `**${lt.top_5}**` || '0', true)
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL())
      message.channel.send(embed).catch(err => message.reply ('Utilisateurs introuvable!'))
    }).catch(err => message.reply("Vous devez saisir le pseudo d'un joueur Fortnite!"));
};
module.exports.config = {
  name: "fnstats",
  aliases: [],
  usage: '*fnstats <username>',
  d: "Statistiques d'un joueur Fortnite"
};