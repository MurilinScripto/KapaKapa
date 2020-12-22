const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {

var list = [
 'https://images-ext-1.discordapp.net/external/IdvUHrWx0nrac74SNNRZ89mz5L7HLJw9CwFUAGXAvD8/https/cdn.weeb.sh/images/ByuM1x5Jz.gif?width=400&height=225',
  'https://images-ext-1.discordapp.net/external/17BDcLr8gln0KOYuNzbRWh35S8MU1wcCZG2dnzI3D3s/https/cdn.weeb.sh/images/rkXImUQDW.gif?width=375&height=300',
  'https://images-ext-1.discordapp.net/external/sxPNKLEK97IPLC4_DORrKXjjvQUQYw9qJH5hgm8QUI4/https/cdn.weeb.sh/images/SJ08mUXwZ.gif?format=png',
'https://images-ext-2.discordapp.net/external/b_FYLnnw0J9atgsIu-_6gtXvcy-pucw8XQ1pY4uhZPI/https/cdn.weeb.sh/images/BkoBX8mwW.gif?width=300&height=300',
];
var rand = list[Math.floor(Math.random() * list.length)]
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Triste')
        .setColor('#e71837')
        .setDescription(`${message.author} está precisando de abraços!😭`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('I am the sadness|Bot criado por ✰ Star.#9537')
        .setAuthor(message.author.tag, avatar)
        message.channel.send(embed)
}
module.exports.help = {
       name: "Chorar"
}