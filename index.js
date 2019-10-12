
const Discord = require("discord.js");
const client = new Discord.Client();
//client.website = require("./website/dashboard");
const fs = require("fs");
client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);

  const jsfile = files.filter(f => f.endsWith(".js"));
  if (jsfile.length <= 0) return console.log("[FS] Couldn't Find Commands!");

  jsfile.forEach((f, i) => {
    let pull = require(`./commands/${f}`);
    client.commands.set(
      pull.config.name,
      Object.assign(pull, {
        triggers: [pull.config.name, ...(pull.config.aliases || [])]
      })
    );
  });
});
fs.readdir("./event/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const event = require(`./event/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./event/${file}`)];
  });
});

client.login("NjI5NTQ4NDU3MjQxMjE0OTg2.XaFQGQ._4TiJaBCp7KldTpDQxFg59STzN8");
module.exports = client;
