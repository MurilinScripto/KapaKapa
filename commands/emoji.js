const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.delete();
  const embed = new Discord.MessageEmbed()

  .setColor('00ffe4')
  .setTitle('❌ | Erro')
   .addField(`Descrição:`, '> Faça o raffa moreira mostrar um emoji.(não precisa mandar o emoji,só mandar o nome dele)', false)
    .addField(`Como usar?`, '> `${prefix}emoji emoji-legal`', false)
    .addField(`Permissões:`, '> `Nenhuma`', false) 
    .setFooter('Finge que isso é uma frase  legal🤫')
  if (!args[0])
    return message.channel.send(embed)
  
  let emoji = message.guild.emojis.cache.find(emoji => emoji.name === args[0]);

  if (!emoji) {
    message.channel.send(
      "`" + args[0] + "` **não é um emoji deste servidor.**"
    );
  } else if (emoji.animated === true) {
    message.channel.send(`<a:${args[0]}:${emoji.id}>`);
  } else {
    message.channel.send(`<:${args[0]}:${emoji.id}>`);
  }
};