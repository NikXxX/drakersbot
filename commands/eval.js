module.exports.run = async (client, message, args) => {
  const math = require("math-expression-evaluator");
  
  function clean(text) {
    if (typeof text === "string")
      return text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    return text;
  }

  if (message.author.id !== "328728174533804032") return undefined;
  const code = args.join(" ");
  const evaled = eval(code);
  const cleanCode = await clean(evaled);
  message.channel.send(cleanCode, { code: "js" });
};

module.exports.config = {
  name: "eval",
  aliases: ["e"],
  usage: '*eval',
  d: "Evaluer un code"
};