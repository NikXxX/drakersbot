module.exports.run = (client, message, args) => {
  try{ 
    const overwatch = require("overwatch-api");
  const ab = args[0]
if(!ab) return message.channel.send("Veuillez saisir me pseudo d'un joueur Overwatch!");
if (!args[1] || (args[1] && !["pc", "psn", "xbl"].includes(args[1]))) return message.channel.send("Veuillez préciser la plateforme psn,pc ou xbl!");

overwatch.getProfile(args[1], "global", args[0].split("#").join("-"), (err, json) => {
  if (err) message.channel.send(":x: Impossible de trouvé cet utilisateur!");
  const { level, portrait, username, playtime: { competitive, quickplay }, private } = json;
  const { games , sportsmanship, shotcaller, teammate } = json.endorsement;
  const { won, draw, played, lost, win_rate } = json.games.competitive;
  if (private) return message.channel.send("Les statistiques de cet utilisateur sont privés!");
  message.channel.send({
    embed: {
      color: '#0040ff',
      title: "Statistiques Overwatch",
      fields:  [ 
        {
          name: "**• Générale →**",
          value: `
          • \`\`Pseudo\`\` → ${username}\n
          • \`\`Niveau\`\` → ${level}\n
          • \`\`Esprit Sportif\`\` → ${sportsmanship.rate}%\n
          • \`\`ShotCaller\`\` → ${shotcaller.rate}%\n
          • \`\`Teammate\`\` → ${teammate.rate}%
          `
      },
      {
        name: "**• Compétitions →**",
        value: `
        • \`\`Matches Joués\`\` → ${played || 0}\n
        • \`\`Victoires\`\` → ${won || 0}\n
        • \`\`Défaites\`\` → ${lost || 0}\n
        • \`\`% de victoires\`\` → ${win_rate || 0}%\n
        • \`\`Temps de jeux\`\` → ${competitive || "00:00:00"}
        `
      },
      {
        name: "**• Matches Rapides →**",
        value: `
        • \`\`Matches Joués\`\` → ${games.quickplay.played || 0}\n
        • \`\`Victoires\`\` → ${games.quickplay.won || 0}\n
        • \`\`Temps de jeux\`\` → ${games.quickplay || "00:00:00"}`
      }
    ],
    thumbnail: {
      url: portrait
    }
    }
  })//.catch(err => message.reply(":x: Le joueur est introuvable!"))
  })
}catch(e){
 message.reply(':x: Impossible de trouver cet utilisateur!')
}
}
module.exports.config = {
   name: "overwatch",
   aliases: ['owstats'],
   d: "Affiche les stats d'un joueur overwtach",
   usage: "*owstats <user> <plateform>"
}