module.exports.run = async (client, message, args) => {
  const fs = require('fs');
  const c = message.mentions.channels.first();
  const m = args.slice(1).join(" ")
  let setwelcome = JSON.parse(fs.readFileSync('./welcome.json', 'utf8'));
  setwelcome[message.guild.id] = {
    channel: c.id,
    welcomemessage: m
  };

  fs.writeFile("./welcome.json", JSON.stringify(setwelcome), (err) => {
    if (err) console.log(err)
  });
}
module.exports.config = {
  name: 'setw',
  aliases: []
}