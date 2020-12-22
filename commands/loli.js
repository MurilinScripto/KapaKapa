const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
'https://i.pinimg.com/originals/a9/61/56/a9615697d8cd1dee05b0ba8a9f1ea9a5.gif',
'https://pa1.narvii.com/6884/a2fa893d92e3410318f40fdeaaec0bc890bc91dbr1-320-181_00.gif',
'https://media1.tenor.com/images/a4b811e15881205ca2244abd91c42014/tenor.gif?itemid=7426168',
'https://media1.tenor.com/images/0632b878511c72d70da67363ac9bb92b/tenor.gif?itemid=17645914'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dar uma loli!');
}
/*
message.channel.send(${message.author.username} acaba de enviar uma loli ${user.username}! :heart:, {files: [rand]});
*/
    const Loli = require('lolis.life');
 
const loli = new Loli();
var loliimage;
    await loli.getSFWLoli().then(lol => {
    loliimage = lol.url;
    })
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Enviar loli')
        .setColor('#00ffff')
        .setDescription(`${message.author} acaba de dar uma loli para ${user}`)
        .setImage(loliimage)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Loli Is Life')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}