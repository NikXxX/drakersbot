const { MessageEmbed } = require("discord.js");
const weather = require('weather-js')

module.exports.run = (client, message, args) => {
if(!args.join(" ")) return message.reply("Veuillez indiquer un emplacement!");
  weather.find({ search: args.join(" "), degreeType: 'C' }, function (err, result) {

    if (result.length === 0) {
      message.channel.send("S'il vous plaît, fournissez moi un emplacement valide!")
      return;
    }

    var current = result[0].current;
    var location = result[0].location;
    const i = new MessageEmbed()
      .setColor(0x0040ff)
      .setThumbnail(current.imageUrl)
      .setDescription(`Météo de ${current.observationtime}`,true)
      .addField(":house_with_garden: Lieu", location.name,true)
      .addField(":clock9: Fuseau Horaire", `UTC${location.timezone}`,true)
      .addField(":date: Date", current.date,true)
      .addField(":thermometer: Température", `${current.temperature}°C`,true)
      .addField(":droplet: Humidité", current.humidity,true)
      .addField(":dash: Vent", current.windspeed,true)
      .addField(":chart_with_upwards_trend: Altitude", location.lat,true)
      .addField(":chart_with_downwards_trend: Longitude", location.long,true)
      message.channel.send(i)
  });
}
module.exports.config = {
  name: "meteo",
  aliases: ["weather"],
  d: "Affiche la météo d'un lieu",
  usage: '*meteo <lieu>'
}