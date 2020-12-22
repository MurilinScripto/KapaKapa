const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  

    let user = message.author;
    let avatar = message.author.displayAvatarURL({dynamic: true, format: 'png' });
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`🏓 **| Pong!**`)
    .setDescription(`${user}`)
    .setAuthor(message.author.tag, avatar)
    
    const m = await message.channel.send(embed);

    m.edit(
    embed.setDescription(`<a:Ping:753296099007266856> Latência do Server: **${m.createdTimestamp -
      message.createdTimestamp}ms.**\nLatência da API: **${Math.round(
      client.ws.ping
    )}ms**`)
    
  )
}