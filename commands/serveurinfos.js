const { MessageEmbed } = require("discord.js");
const moment = require("moment");
moment.locale("fr");
//const { prefix } = require("../../config.json");

const tims = require("tims");
module.exports.run = async (client, message, args) => {
  const e = Date.now() -  message.guild.createdAt
//  const e = math.eval(Date.now() - message.guild.createdAt)
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
      .setAuthor(message.guild.name, message.guild.iconURL({ format: "gif", size: 2048}))
      .addField("\u200B\n🆔 ID du serveur", message.guild.id, true)
      .addField("\u200B\n📅 Crée le",moment(message.guild.createdAt).format("LLL") , true)
    . addField("\u200B\n:cake: Âge", tims.text(e,{lang:'fr',format:'day'}),true)
      .setThumbnail(message.guild.banner || message.guild.iconURL({ format: "gif", size: 2048}))
      .addField("\u200B\n👑 Créateur", message.guild.owner, true)
      .addField("\u200B\n<:emoji_1:632964226360672256> Boosts", message.guild.premiumSubscriptionCount)
      .addField(`\u200B\n👥 Membres`, `**${message.guild.memberCount}** Membres`, true)
      .addField(
        `\u200B\n💬 Salons [${
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
        "\u200B\n🌎 Autres",
        `**Région: ** ${message.guild.region} \n**Niveau de vérification: ** ${
          verifLevels[message.guild.verificationLevel]
        }`,
        true
      )
      .addField(`\u200B\n🔐 Rôles [${message.guild.roles.size}]`)

    embed.fields[8].value = message.guild.roles
      .sort((a, b) => b.position - a.position)
      .map(r => r)
      .slice(1)
      .join(", ");
    message.channel.send(embed).catch(err => {
      if (err.name == "DiscordAPIError" || err.name == "RangeError") {
        embed.fields[8].value = "Il y a trop de rôles 😦";
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