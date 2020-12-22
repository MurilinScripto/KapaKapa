const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/cSqWaZR.gif',
  'https://i.imgur.com/EdQUTdc.gif',
  'https://i.imgur.com/RAGN20o.gif',
];
var rand = list[Math.floor(Math.random() * list.length)]
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Comida é sempre bom')
        .setColor('#e71837')
        .setDescription(`${message.author}Se alimentou <:Chiba_Pipoquinha:781903413390475294>`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Yummm')
        .setAuthor(message.author.tag, avatar)
        message.channel.send(embed)
}
module.exports.help = {
       name: "Comida"
}