module.exports.run = (client, message, args) => {
const randomColor = require("randomcolor");
const color = randomColor({
   luminosity: "random",
   hue: "random"
});
  //console.log(color)
message.channel.send({
  embed: {
  title: "•__Couleur aléatoire__•",
  color: color,
  description: color
  }
})
}
module.exports.config = {
  name: "couleur",
  aliases: [],
  d: "Affiche une couleur aléatoire",
  usage: "*couleur"
}