module.exports.run = async (client, message,args,prefix) => {
 // const b64 = require("base64-url") 

let user = message.mentions.users.first() || message.author;
let avatar = user.displayAvatarURL({size:  1024 , format: "png"})
 const ameClient = require("amethyste-api")
 const ameApi = new ameClient("ff41a095bc493607d2865295c74cf72329fa9681b5fb57c08bae6493d550d7bc3c0433508e04dfd3f2c569d888b8ae33e20529fb1489b6b2e25f92226b6ef1d2")
const base64 = args[1]
if(args[0] === "info") {
  return message.channel.send({
    embed: {
      author:{
        icon_url: message.author.displayAvatarURL({ size: 1024 , format: "png"}),
        name: message.author.username
      },
      color: 0x0040ff,
      title: "•__Voici les types de triggered__•",
      description: "• `invert` -> `-i`\n• `greyscale` -> `-g`\n• `sepia` -> `-s`\n• `blur` -> `-b`\n• `horizontal` -> `-h`\n• `vertical` -> `-v`"
    }
  })
}

if(!base64) {
    let image = ameApi.generate("triggered", {      "url" : avatar }) .then(image => {
      
message.channel.send({
   files: [{
       attachment: image, 
       name: "trig.gif" 
   }] 
})
    }).catch(err => {
      throw err;
    })
  }
  if ((args[1] && !["-i", "-g", "-b" , "-s" ,"-h" , "-v"].includes(args[1]))) return message.reply(`Ce type n'est pas disponible veuillez faire \`${prefix}triggered info\` pour avoir les informations sur les types et \`${prefix}h triggered\` pour savoir comment utiliser cette commande!`);

  switch (base64) {
    case "-i": {
      let image = ameApi.generate("triggered", { 
    "url" : avatar , 
    invert :"true"
      })
    .then(image => {
message.channel.send({
   files: [{
       attachment: image, 
       name: "trig.gif" 
   }] 
})
    }).catch(err => {
      throw err;
    })

   break;
}
case "-g": {
      let image = ameApi.generate("triggered", { 
    "url" : avatar , 
    greyscale :"true"
      })
    .then(image => {
message.channel.send({
   files: [{
       attachment: image, 
       name: "trig.gif" 
   }] 
})
    }).catch(err => {
      throw err;
    })

   break;
} 
case "-b": {
      let image = ameApi.generate("triggered", { 
    "url" : avatar , 
    blur :"true"
      })
    .then(image => {
message.channel.send({
   files: [{
       attachment: image, 
       name: "trig.gif" 
   }] 
})
    }).catch(err => {
      throw err;
    })

   break;
}
case "-h": {
      let image = ameApi.generate("triggered", { 
    "url" : avatar , 
    horizontal :"true"
      })
    .then(image => {
message.channel.send({
   files: [{
       attachment: image, 
       name: "glitch.gif" 
   }] 
})
    }).catch(err => {
      throw err;
    })

   break;
}
case "-v": {
      let image = ameApi.generate("triggered", { 
    "url" : avatar , 
    vertical :"true"
      })
    .then(image => {
message.channel.send({
   files: [{
       attachment: image, 
       name: "trig.gif" 
   }] 
})
    }).catch(err => {
      throw err;
    })

   break;
} 
case "-s": {
      let image = ameApi.generate("triggered", { 
    "url" : avatar , 
    sepia :"true"
      })
    .then(image => {
message.channel.send({
   files: [{
       attachment: image, 
       name: "trig.gif" 
   }] 
})
    }).catch(err => {
      throw err;
    })

   break;
} 
  
  }

}

 module.exports.config = {
  name: "triggered",
  aliases: [],
  d: "Affiche un gif triggered",
  usage:"*triggered [mention user] [type]"
}
