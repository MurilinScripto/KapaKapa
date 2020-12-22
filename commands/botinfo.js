const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
const embed = new Discord.MessageEmbed()

  .setColor('#00ffe4')
 
  .setTitle('| Sobre O Bot')
  .setDescription(`<:certo:782749526280503326>Ola ${message.author} Meu nome é Megumin Bot e vim me aparesentar!\n\n<:certo:782749526280503326> ${client.guilds.cache.size} servidores!\n\n<:certo:782749526280503326>Criador:✰ Star.#9537\n\n <:certo:782749526280503326> Estou em ${client.channels.cache.size} canais\n\n <:certo:782749526280503326> comida favorita:Batata Frita com molho de processador :yum:\n\n [Meu Website](http://megumin-discord-bot.glitch.me/) `)
    .setFooter('|Bot criado e desenvolvido por ✰ Star.#9537')
  message.channel.send(embed)
}