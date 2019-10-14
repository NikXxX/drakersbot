module.exports.run = (client, message, args) => {
//var hexToBinary = require('hex-to-binary');
const test = require("decode-encode-binary")
  var data = args.join(" ");
 if(!data) return message.reply("Veuillez saisir le message à encode ou à decode!")
if(data.length > 500) return message.reply("Votre message est trop long!")
  message.channel.send({
  embed: {
    color: 0x0040ff,
        fields: [

      {
        name: "•__Binaire__•",
        value: `\`\`\`\n${test.auto(data)}\`\`\``
      }
    ]
  }
})
}
module.exports.config = {
  name: "binaire",
  aliases: [],
  usage: "*binaire <message>",
  d: "Met votre message en code binaire"
}