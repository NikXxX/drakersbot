module.exports.run = async (client,message,args) => {
  const target = message.mentions.members.first();
 const raison = args.slice(1).join(" ");
  if(raison.length > 500) return message.reply("La raison du bannissement est trop longue!");
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply(":x: | Vous n'avez pas la permission `BAN_MEMBERS` pour effectuer cette commande!");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply(":x: | Je n' pas la permission `BAN_MEMBERS` pour effectuer cette commande!");
  if(!target) return message.reply("Veuillez mentionner l'utilisateur à bannir!");
  if(target.highestRole) return message.reply("Je ne pas bannir cet utilisateur!");
  if(target === message.author) {
    await message.reply("Vous pouvez pas vous auto ban!");
  }
  target.ban({reason: raison}).then(a => {
  message.reply(`Cet utilisateur a bien été banni du serveur!`)
                                                     }).catch(err =>  message.reply(":x: Je ne peux pas bannir cet utilisateur!"))                                          
}
module.exports.config = {
  name: "ban",
  aliases: [],
  usage: "*ban <mention user> [raison]",
  d: "Banni un membre d'un serveur"
}