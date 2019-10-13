module.exports.run = async (client, message, args) => {
  const base64 = args[0]
  if (!base64 || (base64 && !["encode" , "decode"].includes(args[0]))) return message.reply("Veuillez préciser le mode \"encode\" ou \"decode\"!");

  let data = args.slice(1).join(" ")
 if(!data) return message.reply("Veuillez saisir le message à encode ou à decode!")
  if(data.length > 300) return message.reply("Votre message est trop long!")
  switch (base64) {
    case "encode": {
      //let data = 'stackabuse.com';
let buff = new Buffer(data);
let base64data = buff.toString('base64');
message.channel.send({
  embed: {
    color: 0x0040ff,
    title: "•__Base64 encode__•",
    fields: [
      {
        name: "•__Message__•",
        value: `\`\`\`${data}\`\`\``
      },
      {
        name: "•__DEcode__•",
        value: `\`\`\`${base64data}\`\`\``
      }
    ]
  }
})
   break;
} 
     case "decode": {
      //let data = 'stackabuse.com';
let buff = new Buffer(data, 'base64');
let text = buff.toString('ascii');message.channel.send({
  embed: {
    color: 0x0040ff,
    title: "•__Base64 encode__•",
    fields: [
      {
        name: "•__Message__•",
        value: `\`\`\`${data}\`\`\``
      },
      {
        name: "•__Decode__•",
        value: `\`\`\`${text}\`\`\``
      }
    ]
  }
})
   break;
} 
  }
}
module.exports.config = {
  name: "base64",
  aliases: [],
  usage: "*base64 encode <message>\n*base64 decode <code>",
  d: "Encoder ou décoder un message en base64"
}