exports.run = async (client, message) => {

   // const Discord = require("discord.js");
if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(":x: | Vous n'avez pas la permission `ADMINISTRATOR` pour effectuer cette commande!")
    let args = message.content.split(" ").slice(1);
   
  
  if(!args) return message.channel.send(`⚠ Pas de message spécifié !`)
  
      
  //if(["@everyone", "@here"].some(ping => args.includes(ping))) return message.channel.send(`⚠ Mentionner \`@everyone\` ou \`@here\` est interdit !`);

  message.channel.send(args.join(" "))  .catch(err => {
         // if(err) console.log(`[Erreur] ${err}`);
      if(err.name == "DiscordAPIError"){
        return message.reply(`⚠ Pas de message spécifié !`);
      };
  });
}
module.exports.config = {
  name: "say",
  aliases:[],
  d: "Envoie un message",
  usage: "*say <message>"
}