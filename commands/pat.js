const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.tenor.com/images/1bf28037aa310fadf3711e703a65c3f1/tenor.gif',
  'https://media1.tenor.com/images/55df4c5fb33f3cd05b2f1ac417e050d9/tenor.gif?itemid=6238142',
  'https://media1.tenor.com/images/116fe7ede5b7976920fac3bf8067d42b/tenor.gif?itemid=9200932'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para acariciar!');
}
/*
message.channel.send(`${message.author.username} **acaba de acariciar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Pat')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de acariciar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Ownnt|Bot criado por ✰ Star.#9537')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}