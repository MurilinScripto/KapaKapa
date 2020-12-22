const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
    name: "blacklist",
    category: "Owner",
    usage: 'blacklist',
    aliases: [],
    description: "Comando privado",
    run: async (client, message, args) => {
 if (message.author.id == "697165280761217045", "697165280761217045") {

      if(!args[0]) return  message.reply('Você precisa Marcar Ou Mandar o Id De Um Usuario!')
let user = message.mentions.members.first() || client.members.cache.get(args[0])
if(!user) return message.reply('Você precisa Marcar Ou Mandar o Id De Um Usuario!')
if(user.id === "697165280761217045" || user.id === "697165280761217045") return message.reply('Você Não Pode Usar Isso No Meu Papai!')
let onouoff = args[1]
if(!onouoff) return message.reply('Você Quer Adicionar Ou Remover?Para Adicionar:On\nPara Tirar:Off')
if(onouoff === "on"){
let motivo = args.slice(2).join(' ')
if(!motivo) return message.reply('Porque Você Quer Colocar Esse Usuario Na Blacklist?')
let black = db.get(`${user.id}_black`)
if(black) return message.reply('Esse Usuario Ja está Na Blacklist!')
db.set(`${user.id}_black`,motivo)
let embed  = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(`${user.user.tag}`,user.user.displayAvatarURL())
.setTitle('O Membro Foi colocado na blacklist!')
.setDescription(`O ${user} entro na blacklist \n**Author:** ${message.author}\n **Motivo:** ${motivo}`)
message.channel.send(embed)
}else if(onouoff === "off"){
let black = db.get(`${user.id}_black`)
if(!black) return message.reply('Esse Usuario Não Está Na Blacklist!')
db.set(`${user.id}_black`,null)
let embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(`${user.user.tag}`,user.user.displayAvatarURL())
.setTitle('Membro Removido Da Blacklist!')
.setDescription(`${message.author} O Membro ${user} Foi Removido Da Blacklist Com Sucesso`)
message.channel.send(embed)
}else return message.reply('Você Quer Adicionar Ou Remover?Para Adicionar:On\nPara Tirar:Off')
}}}