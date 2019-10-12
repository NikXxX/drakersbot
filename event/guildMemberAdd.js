module.exports = async (client, member, args) => {
  //On cherche le channel textuel nommé : entrée-sortie
  const sChannel = member.guild.channels.find(ch => ch.name === "🏠-accueil");

  //si le channel n'éxiste pas... tant pis
  if (!sChannel) return;

  //on prépare les phrases random, à vous d'en ajouter, supprimer, etc...
  const sayArray = [
    `**${member.displayName}** a rejoint le serveur, cachez vous !`,
    `Qui veux des chips ? **${member.displayName}** a rejoint le serveur !`,
    `Hey, **${member.displayName}**, bienvenu(e) sur **${member.guild.name}**, amuse toi bien !`,
    `Attention ! **${member.displayName}** vient de débarquer !`,
    `**${member.displayName}** est entré(e) dans le monde obscur de se serveur ! Donnez lui beaucoup d'amour... il/elle en aura besoins.`
  ];

  // random
  const math = Math.floor(Math.random() * sayArray.length);

  //Envoi de l'embed dans le channel défini au début
  sChannel.send({
    embed: {
      color: 0x41f300,
      title: "**Bienvenue |** 👋 ",
      description: `${sayArray[math]}`
    }
  });
};
