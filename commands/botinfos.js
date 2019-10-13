module.exports.run = (client, message) => {
const { MessageEmbed } = require("discord.js");
const os = require("os");
const embed = new MessageEmbed()
.setColor("#0040ff")
.setThumbnail(client.user.avatarURL())
.addField(":robot: Nom du bot",client.user.tag)
.addField(":1234: Nombre de commandes",client.commands.size)
.addField(":paperclip:Version","0.0.1")
.addField(":1234: Nombre de serveurs",client.guilds.size)
.addField(":gear: Processus", `\`\`\`yaml\n${os.cpus()[0].model}\`\`\``)
.addField(":computer: Plateforme", os.platform())
message.channel.send(embed);
}
module.exports.config = {
  name: "botinfos",
  aliases: ["bi"],
  usage: "*botinfos",
  d: "Affiche les informations du bot"
}