module.exports.run = async (client,message,args) => {
  const target = message.mentions.members.first();
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply(":x: | Vous n'avez pas la permission `BAN_MEMBERS` pour effectuer cette commande!");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply(":x: | Je n' pas la permission `BAN_MEMBERS` pour effectuer cette commande!");
  if(!target) return message.reply("Veuillez mentionner l'utilisateur à bannir!");
  if(target.highestRole) return message.reply("Je ne pas bannir cet utilisateur!");
  if(target === message.author) {
    await message.reply("Vous pouvez pas vous auto ban!");
  }
  target.kick().then(a => {//({reason: args.slice(1).join(" ")}).then(a => {
  message.reply(`Cet utilisateur a bien été expulsé du serveur!`)
                                                     }).catch(err => message.reply(":x: Je ne peux pas bannir cet utilisateur!"))                                          
}
module.exports.config = {
  name: "kick",
  aliases: [],
  usage: "*kick <mention user>",
  d: "Expulse un membre d'un serveur"
}