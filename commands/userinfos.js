const { MessageEmbed } = require("discord.js");
const moment = require("moment");

module.exports.run = async (client, message, args) => {

moment.locale("fr");
const s = {
  online: "En ligne",
  dnd: "Ne pas déranger",
  idle: "Inactif",
  offline: "Hors ligne/Invisible"
};
  const st= {
  online: "<:green:633246521067831306> Status",
  dnd: ":no_entry Status",
  idle: ":expressionless: Status",
  offline: "Hors ligne/Invisible"
};

  let user = message.mentions.users.first() || message.author;
  let userAvatar = user.displayAvatarURL({ format: "png", size: 2048});
  let userEmbed = new MessageEmbed()
    .setColor("#0040ff")
    .setAuthor(`Informationns sur ${user.tag}`, userAvatar)
    //.setFooter(`ID: ${user.id}`)
    .addField("\u200B\n:bust_in_silhouette: Pseudo", `${user.username}`, true)
    .addField('\u200B\n:id: ID', user.id ,true)
    .addField("\u200B\n:hash: Discriminateur", `#${user.discriminator}`, true)
    .addField(
      "\u200B\nSurnom",
      message.guild.member(user).nickname
        ? message.guild.member(user).nickname
        : "Aucun",
      true
    )
    .addField(`\u200B\n${st[user.presence.status]}`,  s[user.presence.status], true)
    
    .addField(
      ":calendar: A rejoint le serveur le",
      `${moment(message.guild.member(user).joinedAt).format("DD/MM/YYYY")}`, true
    )
    .addField(
      "\u200B\n:calendar: A rejoint discord le",
      `${moment(user.createdAt).format("DD/MM/YYYY")}`,true
    )
    .addField("\u200B\n:hammer: Bannable",user.bannable ? "- ☑" : "- :x:",true)
    .addField("\u200B\n⭕ Kickable", user.kickable ? "- ☑" : "- :x:",true)
  
  .addField("\u200B\n🔐 Rôles:", message.guild.member(user).roles.map(s => s).join(" | "))
    .setThumbnail(userAvatar);
    message.channel
      .send(userEmbed)
  .catch(err => {
      //.then(message => console.log('message sent!'))
  if (err.name == "DiscordAPIError" || err.name == "RangeError") {
        userEmbed.fields[9].value = "Il y a trop de rôles 😦";
        message.channel.send(userEmbed);
      } else console.error(err);
    });
};
module.exports.config = {
  name: "userinfos",
  aliases: ["ui"],
  usage: '*userinfos [mention user]',
  d: "Informations d'un utilisateur"
};