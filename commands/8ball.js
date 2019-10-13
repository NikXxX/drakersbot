module.exports.run = async (client, message, args) => {
  if (!args[1]) return message.reply("S'il vous plaît, posez-moi une question avec 2 mots ou plus!");
  let replies = ["Oui", "Non", "Peut-être", "Probablement que oui", "Probablement que non", "Surement", "Je pense que oui", "Bien sûr!", "Mes sources disent non.", "Je sais pas"];
  let res = Math.floor(Math.random() * replies.length);
  message.reply(`:8ball: | ${replies[res]}`)
};
module.exports.config = {
  name: "8ball",
  aliases: [],
  d: "Donne une réponse aléatoire",
  usage: "*8ball <question>"
}