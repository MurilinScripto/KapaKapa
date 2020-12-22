const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  let card = new Discord.MessageEmbed()
  .setColor('DARKCYAN')
  .setTitle('Abre canal')
  .setDescription(':unlock: | Você deseja realmente dar unlock neste canal?')
message.channel.send(card).then(msg => {

  msg.react('🔓') 

  const filtro = (reacao, usuario) => reacao.emoji.name === '🔓' && usuario.id === message.author.id; 
  const coletor = msg.createReactionCollector(filtro);

  coletor.on('collect', () => { 

    let card2 = new Discord.MessageEmbed()
    .setTitle('unlocked')
    .setDescription('🔓 | Canal aberto com sucesso!')
    .setColor('DARKCYAN')

    msg.edit(card2);

      if (!client.null) client.null = [];
      if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(":x: Ops...  você não tem permissões para isto ");  message.channel.createOverwrite(message.guild.id, {
              SEND_MESSAGES: null 
      })



      })
  }

                                )};