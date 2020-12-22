const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {

var list = [
  'https://media1.tenor.com/images/97f9efe27f119889fe0ce8ee8d3ca5ae/tenor.gif?itemid=17815317',
  'https://media1.tenor.com/images/97f9efe27f119889fe0ce8ee8d3ca5ae/tenor.gif?itemid=17815317',
];
var rand = list[Math.floor(Math.random() * list.length)]
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Pato')
        .setColor('#e71837')
        .setDescription(`${message.author} Acaba de derrapar um zonibu`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('o zonibu vai derrapa|Bot criado por ✰ Star.#9537')
        .setAuthor(message.author.tag, avatar)
        message.channel.send(embed)
}
module.exports.help = {
       name: "zonibu"
}