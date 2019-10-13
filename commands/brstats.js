const { MessageEmbed } = require("discord.js");
const axios = require("axios");
module.exports.run = (client, message, args) => {
const tags = args.join(' ');
const tag = tags.replace(/#/g, "");
if (!tag) return message.reply("Veuillez saisir le tag d'un joueur BrawlStars!");
axios({
  method: "get",
  url: `https://api.brawlapi.cf/v1/player?tag=${tag}`,
  headers: {
    Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNjb3JkX3VzZXJfaWQiOiIzMjg3MjgxNzQ1MzM4MDQwMzIiLCJyZWFzb24iOiJCb3QgIiwidmVyc2lvbiI6MSwiaWF0IjoxNTY3NjAyMDQ5fQ.dDKHloN7b1uM4q1Un7dH61jIw6Q-oytgOj2yQD-mwcc"
  },
  responseType: "application/JSON"
}).then(br => {
  //console.log(br.data);
  const embed = new MessageEmbed()
  .setThumbnail(br.data.avatarUrl)
    .setColor(`#${br.data.nameColorCode}`)
    .addField("<:emoji_44:632160022176202763> Pseudo", br.data.name,true)
    .addField("<:emoji_44:632160022176202763> Tag", br.data.tag,true)
    .addField("<:emoji_42:632156487036305429> Trophées", br.data.trophies,true)
    .addField("<:emoji_43:632156509731815454> Records de Trophées", br.data.highestTrophies,true)
    .addField("<:emoji_44:632156530954731530> Niveau", `${br.data.expLevel} - (${br.data.expFmt})`,true)
    .addField('<:emoji_47:632156589800947730> Victoires en Solo',br.data.soloShowdownVictories,true)
    .addField('<:emoji_48:632156611615522826> Victoires en Duo', br.data.duoShowdownVictories, true)
    .addField('<:emoji_50:632156650731470848> Meilleurs temps Big Brawler', br.data.bestTimeAsBigBrawler,true)
    .addField('<:emoji_49:632156632658477056> Meilleur temps RoboRumble', br.data.bestRoboRumbleTime,true)
    .addField("<:emoji_45:632156551934771200> Club", `[${br.data.club.name}](https://www.starlist.pro/stats/club/${br.data.club.tag}?utm_source=starbot&utm_medium=discord_bot&utm_campaign=profile_club)`)
    .addField("<:emoji_43:632159190407708683> Brawlers débloquer", `${br.data.brawlersUnlocked} / 29`,true)
  message.channel.send(embed)
}).catch(err => message.reply('Impossible de trouver cet utilisateur!'))
}
module.exports.config = {
  "name": "brstats",
  "aliases": [],
  usage: '*brstats <tag>',
  d: "Statistiques d'un joueur BrawlStars"
}