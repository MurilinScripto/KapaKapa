const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/P1AmLxu.gif',
  'https://imgur.com/zaqvItc.gif',
  'https://imgur.com/wjhkBHx.gif',
  'https://i.imgur.com/GLKXrF1.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para alimentar!');
}
/*
message.channel.send(`${message.author.username} **acaba de alimentar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Feed')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de alimentar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Nya Nya Nya|Bot criado por ✰ Star.#9537')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}