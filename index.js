const express = require('express');
const app = express();
const db = require('quick.db')
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Sou Tongolinha,Recebi o Ping às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");


client.on('message', message => {
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;
  let prefix = db.get(`prefix_${message.guild.id}`)
  if (!prefix) prefix = config.prefix
  if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

  const args = message.content
    .trim().slice(prefix.length)
    .split(/ +/g);
  let command = args.shift().toLowerCase();
  if (command === "e") command = "eval"
  if (command === "ajuda") command = "help"
  if (command === "abraçar") command = "hug"
  if (command === "beijar") command = "kiss"
  if (command === "atacar") command = "attack"
  if (command === "atm") command = "bal"
  if (command === "moedas") command = "bal"
  if (command === "aboutme") command = "botinfo"
  if (command === "cry") command = "chorar"
  if (command === "alimentar") command = "feed"
  if (command === "draw") command = "sorteio"
  if (command === "giveaway") command = "sorteio"
  try {
    const commandFile = require(`./commands/${command}.js`)
    commandFile.run(client, message, args);
  } catch (err) {
    const express = require('express');
    message.reply(`Ola por acaso você é burro?O  comando ${command} não foi encontrado!,se quiser saber meus comandos utilize ${prefix}help!`)
  }
});

client.on("ready", () => {
  let activities = [
    `Utilize ${config.prefix}help
       para obter ajuda`,
    `${client.guilds.cache.size} servidores!`,
    `${client.users.cache.size} usuarios`,
    `Continue sendo tchola :)`,
    `Minha comida favorita é Batata Frita com molho de processador!`,
    `entre no servidor do meu dono! https://discord.com/invite/y43YYmb46E `,
  ],
    i = 0;
  setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
    type: "PLAYING"
  }), 200 * 40);
  client.user
    .setStatus("online")
    .catch(console.error);
  console.log("Estou Tongolinha!")
})



const { readdirSync } = require("fs")

module.exports.run = (client) => {
  for (let dir of readdirSync("./eventos/")) {
    for (let file of readdirSync(`./eventos/${dir}`).filter(n => n.endsWith(".js"))) {
      let pull = require(`../eventos/${dir}/${file}`)
      var nome = file.split(".").shift()
      client.on(nome, pull.bind(null, client))
    }
  }
  console.log(`Eventos carregados: ${client._eventsCount}`)
}


client.on("message", async message => {
  let prefix = db.get(`prefix_${message.guild.id}`)
  if (!prefix) prefix = config.prefix
  if (message.content.startsWith('<@!770987514520928256>') || message.content.startsWith('<@770987514520928256>')) {
    let embed = new Discord.MessageEmbed()
      .setColor('#A020F0')
      .setDescription('**<a:Cat_Dancing:784033155425239050>Olá Meu Prefixo Neste Servidor é** ```' + prefix + '```<:KannaHello:784033100787089408>se quiser use ```' + prefix + 'setprefix``` Para trocar de prefixo!')

    message.channel.send(embed);
  }
});



client.on('guildMemberAdd', member => {
  let channelID = db.get(`${member.guild.id}_channelID`)
  if (!channelID) return
  let channel = member.guild.channels.cache.get(channelID)
  if (!channel) return
  let msg = db.get(`${member.guild.id}_msg`)
  let img = db.get(`${member.guild.id}_gif`)
  if (!msg) {
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
      .setDescription(`Ola ${member} Seja Bem vindo(a) ${member.guild.name} agora temos ${member.guild.members.cache.size} de membros!Seja bem vindo a o ${member.guild.name}!Leia as Regras e Se divirta!`)
    if (img) embed.setImage(img)
    channel.send(embed)
  } else {
    let one = msg.replace('[guild.name]', member.guild.name)
    let two = one.replace('[member.name]', member.user.username)
    let there = two.replace('[member]', member)
    let four = there.replace('[members]', member.guild.members.cache.size)
    let five = four.replace('[member.tag]', member.user.tag)
    let six = five.replace('[member.id]', member.user.id)
    let seven = six.replace('\n', `\n`)
    msg = seven
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
      .setDescription(msg)
    if (img) embed.setImage(img)
    channel.send(embed)
  }
})
client.on('guildMemberRemove', member => {
  let channelID = db.get(`${member.guild.id}_channelID_leave`)
  if (!channelID) return
  let channel = member.guild.channels.cache.get(channelID)
  if (!channel) return
  let msg = db.get(`${member.guild.id}_msg_leave`)
  let img = db.get(`${member.guild.id}_gif_leave`)
  if (!msg) {
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
      .setDescription(`O ${member.user.tag}(${member.id}) acaba de sair do servidor... sem ele a gente so tem ${member.guild.members.cache.size}  de membros`)
    if (img) embed.setImage(img)
    channel.send(embed)
  } else {
    let one = msg.replace('[guild.name]', member.guild.name)
    let two = one.replace('[member.name]', member.user.username)
    let there = two.replace('[member]', member)
    let four = there.replace('[members]', member.guild.members.cache.size)
    let five = four.replace('[member.tag]', member.user.tag)
    let six = five.replace('[member.id]', member.user.id)
    let seven = six.replace('\n', `\n`)
    msg = seven
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
      .setDescription(msg)
    if (img) embed.setImage(img)
    channel.send(embed)
  }
})


client.login(process.env.TOKEN);
