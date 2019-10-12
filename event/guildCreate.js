module.exports = async (client, guild) => {
  client.channels.get("632205632593854465").send({
    embed: {
      title: "J'ai rejoint un serveur !",
      color: "GREEN",
      thumbnail : {
        url: guild.iconURL
      },
      description: `Je suis sur ${client.guilds.size}`,
      fields: [
        {
          name: "Nom du serveur",
          value: guild.name
        },
        {
          name: ":crown: Créateur du serveur",
          value: guild.owner
        },
        {
          name: "Membres",
          value: `${guild.users.size} Membres`
        }
      ]
    }
  })
}