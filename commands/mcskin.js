module.exports.run = (client, message) => {
    //const name = args.join(" ").split("").toString().replace(/[!@#\$%\^&\*\(\)\[\]\?\:;'",\.\\\/]/gi, "")
var args = message.content.split(" ").slice(1).toString().split("")
if (!args) return message.reply("Veuillez saisir le nom d'un skin!");
var test = "" 
var test2 = "abcdefghijklmnopqrstuvwxyz1234567890" 
for(var i = 0; i<args.length ; i++) {
if(test2.includes(args[i].toLowerCase())) {
test = test+args[i] 
} 
}
//message.channel.send(test)
if(args.length < 1) return message.reply("Le pseudo est trop court ou contient que des caractères spéciaux!");
    const { MessageEmbed } = require("discord.js");
    const embed = new MessageEmbed()
    .setColor("#0040ff")
      .setTitle(`Télécharger ce skin!`)
      .setURL(`https://minotar.net/download/${test}`)
      .setImage(`https://minotar.net/body/${test}/100.png`);
    message.channel.send(embed).catch(err => message.reply("Skin Minecraft introuvable"));
  }
module.exports.config = {
    name: "mcskin",
    aliases: [],
  usage: '*mcskin <pseudo du joueur>',
  d: "Affiche le skin d'un joueur Minecraft"
}