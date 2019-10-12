module.exports.run = (bot, message, args) => {
  const { MessageEmbed } = require("discord.js")
  const math = require('math-expression-evaluator');
  const expression = args.join(" ").split("%").join("/100").split(",").join(".").split("÷").join("/").split("0/0").join("0");
  const expression2 = args.join(" ");
  if (!expression) return message.channel.send("Veuillez saisir une expression à résoudre!")
  try {

const solved = math.eval(expression).toString();
    const em = new MessageEmbed()
      .setColor(0x0040ff)
      .setTitle("•__CALCULATRICE__•")
      .addField("EXPRESSION", `\`\`\`${expression2}\`\`\``)
      .addField("RÉSULTAT", `\`\`\`${solved}\`\`\``)
    message.channel.send(em)
  } catch (err) {
    const e1 = new MessageEmbed()
      .setColor("ff0000")
      .setDescription(`\`\`\`- ERREUR -\nImpossible de résoudre cette expréssion\nVotre calcul : ${expression2}\`\`\``)
    return message.channel.send(e1);
  }
}
module.exports.config = {
  name: "calcul",
  aliases: ["calc"],
  d: "Résolue votre expréssion",
  usage : '*calcul <expression>'
}
