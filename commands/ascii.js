module.exports.run = async (client, message) => {
var args = message.content.split(" ").slice(1).toString().split("")
if (!args) return message.reply("Veuillez saisir un texte!");
var test = "" 
var test2 = "abcdefghijklmnopqrstuvwxyz1234567890!?,()/-.´`':;\"<>~|[]{}#@%+=*_^"
if (args.length > 14) {
      return message.reply("Votre texte est trop grand!")
    }
for(var i = 0; i<args.length ; i++) {
if(test2.includes(args[i].toLowerCase())) {
test = test+args[i] 
} 
}
  if(!test) return message.reply("Votre message doit contenir que des caractères normaux!")
const figlet = require("figlet");  
    figlet(test, function(err, text) {
      if (err) {
        console.log(err);
        return;
      }
      message.channel.send("```" + text + "```")
      
      
    });
  }
module.exports.config = {
  name: "ascii",
  aliases: [],
  usage: "*ascii",
  d: "Transforme votre texte en ascii art"
}