module.exports = client => {
  console.log(`${client.user.username} est prêt!`);
  client.user.setActivity(`*help - ${client.guilds.size} serveurs`);
};
