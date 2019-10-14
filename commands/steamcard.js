
exports.run = async (client,  message, args) => {
let user = message.mentions.users.first() || message.author;
//let avatar = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=2048`;
let avatar = user.displayAvatarURL({size: 1024 , format: "png"})
  const ameClient = require("amethyste-api")
 const ameApi = new ameClient("ff41a095bc493607d2865295c74cf72329fa9681b5fb57c08bae6493d550d7bc3c0433508e04dfd3f2c569d888b8ae33e20529fb1489b6b2e25f92226b6ef1d2")
let image = ameApi.generate("steamcard", { 	 "url" : avatar , "text": user.username}) .then(image => {
console.log(image)
message.channel.send({
   files: [{
       attachment: image, 
       name: "steamcard.png" 
   }] 
})
    }).catch(err => {
      throw err;
    })
}
module.exports.config = {
name: "steamcard",
aliases: []
}