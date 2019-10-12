module.exports.run = async (client, message, args, prefix) => {
  const fs = require("fs");
  if(!message.member.hasPermission('MANAGE_SERVER')) return message.reply("Vous n'avez pas la permission `MANAGE_SERVER` pour utiliser cette commande!")
  if(!args[0]) return message.reply(`Veuillez sasir le préfix désireé!`);
  if(args[0].length > 5) return message.reply("Le préfix désiré est trop grand!");

  let prefixes = JSON.parse(fs.readFileSync('./prefixes.json', 'utf8'));
  prefixes[message.guild.id] = {
      prefixes: args[0]
    };

fs.writeFile("./prefixes.json",JSON.stringify(prefixes) , (err) => {
  if(err) console.log(err)
});
message.channel.send(`Nouveau préfix => ${args[0]}`);
}
module.exports.config = {
  name: 'prefix',
  aliases: ["p"],
  usage: "*prefix <préfix désiré>"
}