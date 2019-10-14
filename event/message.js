module.exports = async (client, message) => {
  const fs = require("fs");
  let prefixes = JSON.parse(fs.readFileSync('./prefixes.json' , 'utf8'));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: "*"
    };
  }
   
const prefix = prefixes[message.guild.id].prefixes;


  if (message.author.bot || message.channel.type === "dm") return;
  if (!message.content.startsWith(prefix)) return;

  const [cmd, ...args] = message.content.slice(prefix.length).split(/ +/g);

  let commandFile = client.commands.find(c =>
    c.triggers.includes(cmd.toLowerCase())
  );
  if (commandFile) commandFile.run(client, message, args, prefix);
};
