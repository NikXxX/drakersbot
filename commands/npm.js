const { MessageEmbed } = require("discord.js");
const npm = require("api-npm");

module.exports.run = async (client, message, args) => {
  if (!args[0] || args[1])
    return message.channel.send(
      `\\❌ | Veuillez entrer un élément de recherche !`
    );

  npm.getdetails(args[0].toLowerCase(), mod => {
    try {
      console.log(mod);
      let embed = new MessageEmbed()
        .setColor("#ff0000")
        .setThumbnail(
          "https://blog.christopherianmurphy.com/assets/images/posts/publishing-npm-packages/publishing-npm-packages.png"
        )
        .addField(
          `Module`,
          `\\📰 Nom : \`${mod.name}\`\n\\🤵 Dev : \`${
            mod.author.name
          }\`\n\\📩 Email : \`${`${mod.author.email}`.replace(
            "undefined",
            "Non fournis"
          )}\``
        )
        .addField("Mots-Clés", `${mod.keywords.join(", ")}`)
        .addField(
          `GitHub`,
          mod.repository.url.substring(4, mod.repository.url.length)
        )
        .addField(`Description`, mod.description);

      message.channel.send(embed);
    } catch (e) {
      return message.channel.send(
        `\\❌ | Ce module NPM **n\'existe pas** dans la base de données NPM !`
      );
    }
  });
};
module.exports.config = {
  name: "npm",
  aliases: [],
  usage: '*npm <Nom du Module>',
  d: "Informations d'un module npmjs"
};
