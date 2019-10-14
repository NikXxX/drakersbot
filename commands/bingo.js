module.exports.run = async (client, message, args) => {
let limit = message.content.split(" ")[1];

if(!limit || isNaN(limit)) {
  return message.channel.send("⚠ Ce n'est pas une limite valide, veuillez taper un nombre !");
}
    if(limit === 0) return message.reply("Veuillez choisir un nombre plus grand que 0!");
  if(limit.length > 5) return message.reply("Veuillez choisir un nombre à 5 chiffres ou moins!")
message.channel.send(`Que le bingo commence ! Vous avez **1** minutes pour trouver un nombre compris entre **0** et **${limit}**`)
    .then(async(m) => {
        const random = Math.floor(Math.random() * limit);
        const filter = m => m.author.id !== client.user.id;

        const collector = await m.channel.createMessageCollector(filter, { time: 60000 });

        collector.on("collect", async(collected) => {
            if(collected.content.toLowerCase() === "annuler") {
                return collector.stop(`✅ Bingo annulé !`);
            } else {
                let response = await collected.content.trim();
                response = parseInt(response);
              if(response > random)     return message.reply("Votre nombre est trop grand!") 
              if(response < random) return message.reply("Votre nombre est trop petit")
                if(isNaN(response)) {
                    return message.channel.send("⚠ Ce n'est pas un nombre !");
                }
                else if(response === random) {
                    await collector.stop(`${collected.author.toString()} a remporté le Bingo, le nombre était: **${random}**`);
                }
            }
        });
        collector.on("end", async(collected, reason) => {
            if(reason && reason !== "time") {
                return message.channel.send(reason);
            } else {
                return message.channel.send(`Personne a remporté le Bingo, le nombre était: **${random}**`);
            }
        });
    });
}
module.exports.config = {
  name: "bingo",
  aliases:[],
  usage: "*bingo <nombre>",
  d: "Joue au bingo"
}