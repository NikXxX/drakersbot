//let config = require("./config");
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
  client.on("message", msg=> {
    
    if(msg.content.startsWith(`<@${client.user.id}>`)) {
      const fs = require("fs");
  let prefixes = JSON.parse(fs.readFileSync('./prefixes.json' , 'utf8'));
  if(!prefixes[msg.guild.id]){
    prefixes[msg.guild.id] = {
      prefixes: "*"
    };
  }
   
const prefix = prefixes[msg.guild.id].prefixes;

      return msg.channel.send({
        embed: {
        color: 0x0040ff,
        description: `Mon préfix est \`\`${prefix}\`\` sur ce serveur`
      }})
    } 
  })
//client.login("NjI5NTQ4NDU3MjQxMjE0OTg2.XaIFLg.ESYFrRMT76Q0fK7uMsQWU4qtXXs");
//client.login("NjI5NTQ4NDU3MjQxMjE0OTg2.XaQAjg._WE87hRwFo3M3Wyv47VkdGEMJ3A");
client.login("NjI5NTQ4NDU3MjQxMjE0OTg2.XaQiiw.KeuL0v9cxZdN4ZJe3i_bO6bku98")
module.exports = client;
