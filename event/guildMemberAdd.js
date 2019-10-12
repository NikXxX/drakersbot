module.exports = async (client, wc ,wm) => {
  console.log(wm)
  client.channels.get(wc.guild.systemChannelID).send(wm);
}