module.exports = async (client, message) => {
  const fs = require("fs");
  let prefixes = JSON.parse(fs.readFileSync('./prefixes.json' , 'utf8'));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: "*"
    };
  }
  let setwelcome = JSON.parse(fs.readFileSync('./welcome.json', 'utf8'));
  if (!setwelcome[message.guild.id]) {
    setwelcome[message.guild.id] = {
      channel: null,
      welcomemessage: null
    };
  }
  const wc = setwelcome[message.guild.id].channel;
 wm = setwelcome[message.guild.id].welcomemessage;
prefix = prefixes[message.guild.id].prefixes;


  if (message.author.bot || message.channel.type === "dm") return;
  if (!message.content.startsWith(prefix)) return;

  const [cmd, ...args] = message.content.slice(prefix.length).split(/ +/g);

  let commandFile = client.commands.find(c =>
    c.triggers.includes(cmd.toLowerCase())
  );
  if (commandFile) commandFile.run(client, message, args, prefix);
};
