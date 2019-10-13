module.exports.run = async (client, message, args) => {
  const axios = require("axios");
  const { MessageEmbed } = require("discord.js");
  const user = args.join(" ").replace(/#/gi, "");
  if (!user) return message.reply("Utilisation : *rwstats <tag>");
  const ligue = {
    Bronze: "<:Bronze:630332521317400576>",
    Elite: "<:Elite:630332521514795016>",
    Gold: "<:gold:631496669174956054>",
    Superstar: "<:superstar:631496669682466817>",
    Specialist: "<:specialist:631496669623484416>",
    Supreme: "<:supreme:631497997372489728>",
    Silver: "<:silver:631496669795581952>",
    Destroyer: "<:destroyer:631496669632135168>",
    Legend: "<:legend:631496669619290141>",
    Champion: "<:champion:631496669275488277>",
    Ninja: "<:ninja:631496669782999060>"
  };
  axios({
    method: "get",

    url: `https://api.rushstats.com/v1/player/${user}`,

    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNjb3JkX3VzZXJfaWQiOiIzMjg3MjgxNzQ1MzM4MDQwMzIiLCJyZWFzb24iOiJCb3QgIiwidmVyc2lvbiI6MSwiaWF0IjoxNTY4NTM0MDg4fQ.M6vg10LXo2lj04a8VbS_uRxQjntU-1MaVP3DPaT1bFE"
    },

    responseType: "application/JSON"
  })
    .then(data => {
      const embed = new MessageEmbed()
        .setColor(0x0040ff)
        .setThumbnail(data.data.league.imageUrl)
        .setTitle("__Statistiques RushWars__")
        .addField(
          "<:625356107971559424:630328550721060898> Pseudo",
          data.data.name,
          true
        )
        .addField(
          "<:625356107971559424:630328550721060898> Tag",
          data.data.tag,
          true
        )
        .addField("<:18:630340794640760866> Niveau", data.data.expLevel, true)
        .addField(
          `${ligue[data.data.league.name]} League`,
          data.data.league.name,
          true
        )
        .addField(
          "<:625356108483264535:630328551270252544> HQ Niveau",
          data.data.variables.hqLevel,
          true
        )
        .addField(
          "<:625356107971559424:630328550721060898> Stars",
          data.data.stars,
          true
        )
        .addField(
          "<:Gun:629968354047950858> Total d'attaques",
          data.data.variables.totalAttacks,
          true
        )
        .addField(
          "<:Gun:629968354047950858> Attaques Stars",
          data.data.variables.attackStars,
          true
        )
        .addField(
          "<:Gun:629968354047950858> Attaques gagnés",
          data.data.variables.totalAttacksWon,
          true
        )
        .addField(
          "<:Gun:629968354047950858> Attaques perdus",
          data.data.variables.totalAttacksLost,
          true
        )
        .addField(
          "<:625356102669959200:630329336536498176> Défenses Stars",
          data.data.variables.defenseStars,
          true
        )
        .addField(
          "<:625356102669959200:630329336536498176> Défenses gagnés",
          data.data.variables.totalDefensesWon,
          true
        )
        .addField(
          "<:625356102669959200:630329336536498176> Défenses perdus",
          data.data.variables.totalDefensesLost,
          true
        );
     // console.log(data.data);
      message.channel.send(embed).catch(err => {
        console.log("1");
        message.reply("Utilisateur introuvable");
      });
    })
    .catch(err => {
      console.log("2");
      message.reply("Utilisateur introuvable");
    });
};
module.exports.config = {
  name: "rwstats",
  aliases: [],
  usage: '*rwstats <tag>',
  d: "Statistiques d'un joueur RushWars"

};