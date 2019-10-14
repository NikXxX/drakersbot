module.exports.run = async (client, message, args) => {
  const texte = args.join(" ");
  if(!texte) return message.reply("Veuillez saisir un texte!");
  if(texte.length > 500) return message.reply("Votre texte est trop grand!");
  var inverse = texte.split('').reverse().join('');
  message.channel.send({
    embed: {
      color: "0040ff",
      description: `\`\`\`yaml\n${inverse}\`\`\``,
      author: {
        icon_url: message.author.displayAvatarURL({ format: "png", size: 2048}),
        name: message.author.username
      },
      footer: {
        text: client.user.username,
        icon_url: client.user.avatarURL({ format: "png", size: 2048})
      }
    }
  })
}
module.exports.config = {
  name: "inverse",
  aliases: [],
  usage: "*inverse <texte>",
  d: "Met votre texte à l'envers"
}