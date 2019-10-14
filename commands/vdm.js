
const cheerio = require('cheerio');
const { get } = require('axios');
const { client } = require("../index.js")

let vdm = [];

module.exports.update = async () => {
        return new Promise((resolve, reject) => {
            get('https://www.viedemerde.fr/aleatoire')
            .then((res) => {
                let $ = cheerio.load(res.data);
                $('a[class="article-link"]')
                    .text()
                    .split('\n')
                    .map((item) => (item.trim() !== '' ? vdm.push(item) : null));
                resolve(vdm);
            })
            .catch(reject);
        });
};
module.exports.send = async (message) => {
        return new Promise((resolve, reject) => {
            let random = Math.floor(Math.random() * vdm.length);
            resolve(message.channel.send({
              embed: {
                color: 0x0040ff,
              description: `\`\`\`${vdm[random]}\`\`\``,
                author: {
                  name: message.author.username,
                  icon_url: message.author.displayAvatarURL({ format: "png", size: 2048})
                  
                }
                                         }
                           }))
            })
        
};
module.exports.run = async (client, message, args) => {
            this.update()
                .then(() => this.send(message))
                .catch(console.error);
    
}
module.exports.config = {
  name: "vdm",
  aliases: [],
  usage: "*vdm",
  d: "Raconte une vdm"
}