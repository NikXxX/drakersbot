module.exports.run = (client, message, args) => {
  if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
    return message.reply(":x: | Vous n'avez pas la permission `MANAGE_MESSAGES` pour effectuer cette commande!");
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return message.reply(":x: | Je n'ai pas la permission `MANAGE_MESSAGES` pour effectuer cette commande!");
if(!args[0]) return message.reply("Veuillez spécifiez le nombre de messages à supprimer!");
if(args >= 101) return message.reply("La limite est de 100!");
if(args <= 2) return message.reply("Le minimum est 2!");
message.channel.bulkDelete(args[0])
message.reply(`J'ai supprimer ${args[0]} messages!`).then(msg => msg.delete(5000))
  .catch(err => {
  message.reply("Je ne peux pas supprimer les message databt de plus de 14 jours!")
})
}

module.exports.config = {
  name: "clear",
  aliases: ["c"],
  usage: "*clear <2-100>",
  d: "Supprime un nombre de messages dans un salon"
}