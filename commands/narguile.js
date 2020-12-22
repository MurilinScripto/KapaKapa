const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {

var list = [
  'https://media1.tenor.com/images/3cc07a85449b164917d2be3e4407a356/tenor.gif?itemid=14154919',
  'https://media1.tenor.com/images/48aa59bab6f487f4ab34884d44006b9f/tenor.gif?itemid=5244910',
];
var rand = list[Math.floor(Math.random() * list.length)]
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Narguile')
        .setColor('#e71837')
        .setDescription(`${message.author} Acaba de fumar um NargasKKKK`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Narguile|Bot criado por ✰ Star.#9537')
        .setAuthor(message.author.tag, avatar)
        message.channel.send(embed)
}
module.exports.help = {
       name: "narguile"
}