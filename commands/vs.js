module.exports.run = async (client, message, args) => {
  let user = message.author;
  let use = message.mentions.users.first();
  //let av = `https://cdn.discordapp.com/avatars/${use.id}/${use.avatar}.png?size=2048`;
  let av = use.displayAvatarURL({
  size: 1024,
  format : "png"
});
  let ava = user.displayAvatarURL({
  size: 1024,
  format : "png"
});
if(!use) return message.reply("Veuillez mentionner une personne!");
  const ameClient = require("amethyste-api");
  const ameApi = new ameClient(
    "ff41a095bc493607d2865295c74cf72329fa9681b5fb57c08bae6493d550d7bc3c0433508e04dfd3f2c569d888b8ae33e20529fb1489b6b2e25f92226b6ef1d2"
  );
  if (!use) {
    return message.reply("Veuillez mentionner un utilisateur!");
  }
  let image = ameApi
    .generate("vs", {
      url: ava,
      avatar: av,
      type: "2"
    })
    .then(image => {
      message.channel.send({
        files: [
          {
            attachment: image,
            name: "vs.png"
          }
        ]
      });
    })
    .catch(err => {
      return message.reply(
        "Vous ou l'utilisateur mentionné ne possède pas d'avatar !"
      );
    });
};
module.exports.config = {
  name: "vs",
  aliases: [],
  usage: '*vs [mention user]',
  d : 'Génère une image versus'
};
