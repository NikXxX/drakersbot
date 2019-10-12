const { MessageEmbed } = require("discord.js");
const moment = require("moment");
moment.locale("fr");
const s = {
  online: "En ligne",
  dnd: "Ne pas déranger",
  idle: "Inactif",
  offline: "Hors ligne/Invisible"
};
module.exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  let userAvatar = user.avatarURL();
  let userEmbed = new MessageEmbed()
    .setColor("#0040ff")
    .setAuthor(`Informationns sur ${user.tag}`, userAvatar)
    .setFooter(`ID: ${user.id}`)
    .addField(":bust_in_silhouette: Pseudo:", `${user.username}`, true)
    .addField(":hash: Discriminateur:", `#${user.discriminator}`, true)
    .addField(
      "Surnom:",
      message.guild.member(user).nickname
        ? message.guild.member(user).nickname
        : "Aucun",
      true
    )
    .addField(":statue_of_liberty: Status:", s[user.presence.status], true)
    
    .addField(
      ":door: A rejoint le serveur le:",
      `${moment(message.guild.member(user).joinedAt).format("DD/MM/YYYY")}`
    )
    .addField(
      ":door: A rejoint discord le:",
      `${moment(user.createdAt).format("DD/MM/YYYY")}`
    )
    //.addField("Roles:", message.guild.member(user).roles.map(s => s).join(" • "))
    .setThumbnail(userAvatar);

  return (
    message.channel
      .send(userEmbed)
      //.then(message => console.log('message sent!'))
      .catch(console.error)
  );
};
module.exports.config = {
  name: "userinfos",
  aliases: ["ui"],
  usage: '*userinfos [mention user]',
  d: "Informations d'un utilisateur"
};
