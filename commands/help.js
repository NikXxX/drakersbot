module.exports.run = async (client, message, args, prefix) => {
    const { MessageEmbed } = require("discord.js");
const commandes = client.commands.size - 1
  // Dans ton code : aide \\
  if (args.length === 1) {
    if (client.commands.map(x => x.config).find(c => c.name === args[0])) {
      var commande = client.commands.map(x => x.config).find(c => c.name === args[0])
    const Aliases =
        commande.aliases.length > 0
          ? commande.aliases.map(a => `\`${a}\``).join(", ")
          : "Aucun"
      const e = new MessageEmbed()
      .setColor("#0040ff")
      .setFooter("<> Obligatoire \n [] Optionnel")
        .setTimestamp()
        .setThumbnail(client.user.avatarURL({ format: "png", size: 2048}))
        //.setFooter(client.user.username, client.user.avatarURL())
        .setAuthor(message.author.username, message.author.avatarURL({ format: "png", size: 2048}))
        .addField(":page_with_curl: **Nom →**", `\`${commande.name}\``,true)
        .addField(":bookmark_tabs: **Aliases →**", `\`${Aliases}\``,true )
        .addField(":pencil: **Description →**", `\`${commande.d}\``,true)
        .addField(":clipboard: **Utilisation →**", `\`${commande.usage.split("*").join(prefix)}\``,true)
      message.channel.send(e);
    };
  } else {
    const embed = new MessageEmbed()
      .setThumbnail(client.user.avatarURL({ format: "png", size: 2048}))
      .setTimestamp()
      .setDescription(`Je possède \`\`${commandes}\`\` commandes!`)
      .setFooter(`${prefix}help <commande> pour avoir les infos d'une commande`)
     // .setFooter(client.user.username, client.user.avatarURL())
      .setAuthor(message.author.username, message.author.avatarURL({ format: "png", size: 2048}))
      .setColor(0x0040ff)
      .addField(
        ":newspaper: **Informations →**",
        "`badge` , `help` , `channelinfos` , `serveurinfos` , `userinfos` , `botinfos`"
      )
      .addField(
        ":video_game: **Jeux →**",
        "`crstats` , `brstats` , `fnstats` , `mcserv` , `mcskin` , `overwatch` , `rwstats`"
      )
      .addField(":gear: **Config →**", "`prefix`")
      .addField(":tada: **Fun →**", "`8ball` , `blague` , `bingo` , `joke` , `inverse` , `vdm`")
      .addField(":tools: **Utilitaires →**","`ascii` , `base64` , `binaire` , `calcul` , `couleur` , `meteo` , `say`")
      // .addField(":police_car: **Staff →**", "`eval`")
      .addField(
        ":camping: **Images →**",
        "`beautiful` , `crush` , `gay` , `sniper` , `triggered` , `vs`"
      )
      .addField(":rotating_light: **Modérations →**","`ban` , `clear` , `kick`")
      .addField(":link: **Liens →**" , "[Support |](https://discord.gg/9mhRJYa)[ Lien d'invitation](https://discordapp.com/api/oauth2/authorize?client_id=629548457241214986&permissions=8&scope=bot)")
    message.channel.send(embed);
      }
  }
module.exports.config = {
  name: "help",
  aliases: ["h"],
  usage: '*help [commande]',
  d: "Affiche ce menu d'aide"
}