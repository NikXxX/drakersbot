module.exports = (member) => {
  const {
    MessageEmbed
  } = require("discord.js")
  //client.on('guildMemberAdd', function (member) {
    let embed = new MessageEmbed()
        .setDescription(':tada: **' + member.user.username + '** a rejoint ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('632824542892392448').send(embed)
    member.addRole('<@&632215436594774058>')
}