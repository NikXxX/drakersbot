const overwatch = require("overwatch-api");
module.exports.run = (client, message, args) => {
  const ab = args[0]
if(!ab) return message.channel.send("Veuillez saisir me pseudo d'un joueur Overwatch!");
if (!args[1] || (args[1] && !["pc", "psn", "xbl"].includes(args[1]))) return message.channel.send("Veuillez préciser la plateforme psn,pc ou xbl!");

overwatch.getProfile(args[1], "global", args[0], (err, json) => {
  if (err) message.channel.send(":x: Impossible de trouvé cet utilisateur!");
  const { game, level, portrait, username, playtime: { competitive, quickplay }, private } = json;
  const { sportsmanship, shotcaller, temmate } = json.endorsement;
  const { won, draw, played, lost, win_rate } = json.games.competitive;
  if (private) return message.channel.send("Les statistiques de cet utilisateur sont privés!");
  message.channel.send({
    embed: {
      color: '#0040ff',
      title: "Statistiques Overwatch",
      fields:  [ 
        {
        name: "Général",
          value: `• Pseudo → ${username}\n• Niveau → ${level}\n• Esprit Sportif → ${sportsmanship.size}/100`
      }
    ],
    thumbnail: {
      url: portrait
    }
    }
    })
  })
}
module.exports.config = {
   name: "overwatch",
   aliases: ['owstats'],
   d: "Affiche les stats d'un joueur overwtach",
   usage: "*owstats <user> <plateform>"
}
