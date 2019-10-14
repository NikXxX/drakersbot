module.exports.run = (bot, message, args) => {
const  { MessageEmbed } = require ("discord.js")
const moment = require("moment")
moment.locale("fr")
let c = message.mentions.channels.first() ||  message.channel;
const type = {
  text: "Textuel"
}

  const em = new MessageEmbed()
.setColor("0040ff")
.setTitle("•__Informations du salon__•")
.setDescription(`<#${c.id}>`)
//.addField("Nom :",c.name)
.addField(":id: ID :",c.id)
.addField(":gear: Type :",type[c.type])
.addField("🔢 Position :",c.rawPosition)
.addField(":calendar: Créé le :",moment(c.createdAt).format("Do MMMM YYYY, LTS"))
.addField("✋ Maniable :", c.manageable ? "- ☑" : "- :x:")
.addField("🗑 Deletable :",c.deletable ? "- ☑" : "- :x:")
.addField("🔞 Nsfw :", c.nsfw ? "- ☑" : "- :x:")
message.channel.send(em)
}
module.exports.config = {
  name: "channelinfos",
  aliases: ["ci"],
  usage: "*channelinfos [mention channel]",
  d: "Donne des informations sur un salon"
}