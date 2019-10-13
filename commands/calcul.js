module.exports.run = (bot, message, args) => {
  const math = require("math-expression-evaluator");
  const expression = args
    .join(" ")
    .split("%")
    .join("/100")
    .split(",")
    .join(".")
    .split("÷")
    .join("/")
    .split("0/0")
    .join("0");
  const expression2 = args.join(" ");
  if (!expression)
    return message.channel.send("Veuillez saisir une expression à résoudre!");
  try {
    const solved = math.eval(expression).toString();
    message.channel.send({
      embed: {
        title: "__**CALCULATRICE**__",
        color: 0x0040ff,
        fields: [
          {
            name: "Expression",
            value: `
           \`\`\`yaml\n${expression2}\`\`\`          
           `
          },
          {
            name: "Résultat",
            value: `
           \`\`\`yaml\n${solved}\`\`\`          
           `
          }
        ]
      }
    });
  } catch (err) {
    return message.channel.send({
      embed: {
        color: 0xff0000,
        description: `
        \`\`\`diff\n- ERREUR -\nImpossible de résoudre cette expréssion\nVotre calcul: ${expression2}\`\`\`
        `
      }
    });
  }
};
module.exports.config = {
  name: "calcul",
  aliases: ["calc"],
  d: "Résolue votre expréssion",
  usage: "*calcul <expression>"
};