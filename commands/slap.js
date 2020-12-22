const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/RFWNaoF.gif',
  'https://imgur.com/o5SrT0V.gif',
  'https://imgur.com/DSZkQIE.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dar um tapa!');
}
/*
message.channel.send(`${message.author.username} **acaba de dar um tapa** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Slap')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de dar um tapa em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Aaaaah|Bot criado por ✰ Star.#9537')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}