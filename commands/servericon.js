const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {  
 const embed = new Discord.MessageEmbed()
  
    .setTitle('**Servericon**')
    .setDescription(`Icon de ${message.guild.name}`)
  .setColor('00ffe4')
  .setImage(message.guild.iconURL({size: 2048}))
 
  message.channel.send(embed)


}