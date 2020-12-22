const Discord = require("discord.js");

exports.run = (bot, message, args) => {
        message.delete()

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Você não possui permissão.`)

    let membro = message.mentions.users.first()
    if(!membro) return message.reply("Mencione um usuário.")
    if(membro.id === message.author.id) return message.channel.send('Você Não Pode Se Dar um Warn')

    let motivo = args.slice(1).join(" ");
    if (!motivo) return message.reply("Escreva um motivo.")

    let embed = new Discord.MessageEmbed()
    .setTitle(`**WARN** - ${membro.username}`)
    .setDescription("Você Foi Avisado..")
    .setColor("#bb00ff")
    .setFooter(`By: ${message.author.username}`, message.author.displayAvatarURL())
    .addField(`Motivo:`, motivo, true)

    membro.send(embed)
    let pembed = new Discord.MessageEmbed()
    .setTitle("**Warn aplicado!**")
    .setDescription(`**Membro:** ${membro.username} \n**Motivo:** ${motivo}`)
    .setColor("#FF0000")
    .setFooter("By: "+message.author.username, message.author.displayAvatarURL({size: 32}))
    message.channel.send(embed)
    }