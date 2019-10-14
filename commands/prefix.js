module.exports.run = async (client, message, args, prefix) => {
try{
  if(!message.guild.member(message.author).hasPermission("MANAGE_SERVER")) return message.reply(":x: | Vous n'avez pas la permission `MANAGE_SERVER` pour effectuer cette commande!")
const fs = require("fs");
  
 // if(!message.guild.member(message.author).hasPermission('MANAGE_SERVER')) return message.reply("Vous n'avez pas la permission `MANAGE_SERVER` pour utiliser cette commande!")
  if(!args[0]) return message.reply(`Veuillez sasir le préfix désireé!`);
  if(args[0].length > 5) return message.reply("Le préfix désiré est trop grand!");
  if(args[0] === prefix) return message.reply(`Le préfix de ce serveur est déjà \`\`${prefix}\`\` !`)
  let prefixes = JSON.parse(fs.readFileSync('./prefixes.json', 'utf8'));
  prefixes[message.guild.id] = {
      prefixes: args[0]
    };

fs.writeFile("./prefixes.json",JSON.stringify(prefixes) , (err) => {
  if(err) message.reply(":x: | Vous n'avez pas la permission `MANAGE_SERVER` pour effectuer cette commande!")

});
message.channel.send(`Nouveau préfix => ${args[0]}`).catch(err => message.reply(":x: | Vous n'avez pas la permission `MANAGE_SERVER` pour effectuer cette commande!"));
}catch(e){
  message.reply(":x: | Vous n'avez pas la permission `MANAGE_SERVER` pour effectuer cette commande!")
}
}
module.exports.config = {
  name: 'prefix',
  aliases: ["p"],
  usage: "*prefix <préfix désiré>",
  d: "Modifie le préfix du bot"
}