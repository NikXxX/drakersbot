const { MessageEmbed } = require("discord.js");
const moment = require("moment");
moment.locale("fr");
//const { prefix } = require("../../config.json");

module.exports.run = async (client, message, args) => {
    let verifLevels = [
      "Aucune",
      "Faible",
      "Moyenne",
      "(╯°□°）╯︵  ┻━┻",
      "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"
    ];
    let region = {
      brazil: ":flag_br: Brazil",
      "eu-central": ":flag_eu: Central Europe",
      singapore: " :flag_sg: Singapore",
      "us-central": ":flag_us: U.S. Central",
      sydney: ":flag_au: Sydney",
      "us-east": ":flag_us: U.S. East",
      "us-south": ":flag_us: U.S. South",
      "us-west": ":flag_us: U.S. West",
      "eu-west": ":flag_eu: Western Europe",
      "vip-us-east": ":flag_us: VIP U.S. East",
      london: ":flag_gb: London",
      amsterdam: ":flag_nl: Amsterdam",
      hongkong: ":flag_hk: Hong Kong",
      russia: ":flag_ru: Russia",
      southafrica: ":flag_za:  South Africa"
    };
    const statues = ["En ligne", "Ne pas déranger", "Inactif"];

    const embed = new MessageEmbed()
      .setColor(0x0040ff)
      .setAuthor(message.guild.name, message.guild.iconURL)
      .addField("🆔 ID du serveur", message.guild.id, true)
      .addField(
        "📅 Crée le",
        moment(message.guild.createdAt).format("LLL") +
          "\n" +
          moment(message.guild.createdAt).fromNow(),
        true
      )
      .addField("👑 Créateur", message.guild.owner, true)
      .addField(`👥 Membres`, `**${message.guild.memberCount}** Membres`, true)
      .addField(
        `💬 Salons [${
          message.guild.channels.filter(c => c.type != "category").size
        }]`,
        `**${
          message.guild.channels.filter(c => c.type == "text").size
        }** Textuels | **${
          message.guild.channels.filter(c => c.type == "voice").size
        }** Vocaux`,
        true
      )
      .addField(
        "🌎 Autres",
        `**Région: ** ${message.guild.region} \n**Niveau de vérification: ** ${
          verifLevels[message.guild.verificationLevel]
        }`,
        true
      )
      .addField(`🔐 Rôles [${message.guild.roles.size}]`);

    embed.fields[6].value = message.guild.roles
      .sort((a, b) => b.position - a.position)
      .map(r => r)
      .slice(1)
      .join(", ");
    message.channel.send(embed).catch(err => {
      if (err.name == "DiscordAPIError" || err.name == "RangeError") {
        embed.fields[6].value = "Il y a trop de rôles 😦";
        message.channel.send(embed);
      } else console.error(err);
    });
  }
module.exports.config = {
  name: "serveurinfos",
  aliases: ["si"],
  usage: '*serveurinfos',
  d: "Informations d'un utilisateur"
}
