const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/jpcnzNe.gif',
  'https://tenor.com/view/attack-attract-kiss-hearts-pokemon-gif-5752186',
  'https://media.tenor.com/images/9ee6b4340b21ffff9a100de178672c3b/tenor.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para atacar!');
}
/*
message.channel.send(`${message.author.username} **acaba de atacar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Attack')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de atacar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Arghh |Bot criado por ✰ Star.#9537')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}