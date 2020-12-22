const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  var embed = new Discord.MessageEmbed()
  .setTitle("Painel de Comandos!")
  .setThumbnail(message.author.displayAvatarURL())
  .setColor("00ffe4")
  .setImage("https://i.imgur.com/fZEFbM3.jpg")
  .setDescription(`Olá, ${message.author} \n Meu nome é Megumin Bot! \n Está é minha lista de comandos!`)
  .addField('1️⃣ Outros\n2️⃣ Diversão \n3️⃣ Moderação\n4️⃣ Economia \n⬅️ Voltar', '\u200B', false)
  .addField('Chame Na Dm Por ajuda!✰ Star.#9537\nOu\njose_trindade1#4463')
  .setFooter('Criadores: ✰ Star.#9537\n\njose_trindade1#4463')
  message.channel.send({embed}).then(msg=> {
    msg.delete({ timeout: 120000 })
      msg.react('1️⃣').then(r=>{
      msg.react('2️⃣')
      msg.react('3️⃣') 
      msg.react('4️⃣')
      msg.react('⬅️')
  })

  const utilfilter = (reaction, user) => reaction.emoji.name === '1️⃣' && user.id === message.author.id;
  const funfilter = (reaction, user) => reaction.emoji.name === '2️⃣' && user.id === message.author.id;
  const diverfilter = (reaction, user) => reaction.emoji.name === '3️⃣' && user.id === message.author.id;
  const economyfilter = (reaction, user) => reaction.emoji.name === '4️⃣' && user.id === message.author.id;
  const voltarfilter = (reaction, user) => reaction.emoji.name === '⬅️' && user.id === message.author.id;
  const util = msg.createReactionCollector(utilfilter, { time: 120000 });
  const fun = msg.createReactionCollector(funfilter, { time: 120000 });
  const diver = msg.createReactionCollector(diverfilter, { time: 120000 });
   const economy = msg.createReactionCollector(economyfilter, { time: 120000 });
  const voltar = msg.createReactionCollector(voltarfilter, { time: 120000 });



  util.on('collect', r1 => { 
   r1.users.remove(message.author.id)
      embed = new Discord.MessageEmbed()
          .setThumbnail(message.author.displayAvatarURL())
          .setColor("#00ffe4")
          .setImage("https://i.imgur.com/fZEFbM3.jpg")
          .setDescription("**⚒ | Outros comandos:**\n\n`botinfo`  `help`  `ping` `uptime`  `carinha` `status` `userinfo` `emoji`**Obs:(O comando emoji não precisa mandar o emoji,só mandar o nome dele `serverinfo`)**");
     
      msg.edit(embed);
  })

  fun.on('collect', r2 => { 
   r2.users.remove(message.author.id)
      embed = new Discord.MessageEmbed()
          .setColor("#00ffe4")
          .setImage("https://i.imgur.com/fZEFbM3.jpg")
          .setThumbnail(message.author.displayAvatarURL())
          .setDescription("**🎭 | Comandos de Diversão!**\n\n`attack`  `coinflip` `dance` `hug` `kiss` `loli`  `narguie` ` pat` `pato` `slap` `comer`  `feed` `laranjo` `ship` `megvidente`  `dog`  `chorar` `stonks` `piada` `ednaldo`
          `monstro` `corrida`");
    
      msg.edit(embed);
  })

  diver.on('collect', r3 => { 
   r3.users.remove(message.author.id)
      embed = new Discord.MessageEmbed()
          .setColor("#00ffe4")
          .setThumbnail(message.author.displayAvatarURL())
          .setImage("https://i.imgur.com/fZEFbM3.jpg")
          .setDescription("**⚙️ | Moderação!**\n\n`ban`  `clean`  `warn` `anunciar` `alterar`  `lock`  `unlock` `slowmode` `kick`  `setprefix` `setwelcome` `SetWelcomeMsg` `Sorteio`");
      msg.edit(embed);
  })

  economy.on('collect', r4 => { 
   r4.users.remove(message.author.id)
      embed = new Discord.MessageEmbed()
          .setColor("#00ffe4")
          .setThumbnail(message.author.displayAvatarURL())
          .setImage("https://i.imgur.com/fZEFbM3.jpg")
          .setDescription(" **💸 | Economia!**\n\n`daily`  `depositar` `Pagar`  `roubar`  `sacar`  `trabalhar` `bal` `raspadinha` `leaderboard`");
      msg.edit(embed);
  })

  voltar.on('collect', r5 => { 
   r5.users.remove(message.author.id)
      embed = new Discord.MessageEmbed()
   .setTitle("Painel de Comandos!")
  .setThumbnail(message.author.displayAvatarURL())
  .setImage("https://i.imgur.com/fZEFbM3.jpg")
  .setColor("#00ffe4")
  .setDescription(`Olá, ${message.author} \n Meu nome é Megumin Bot! \n Está é minha lista de comandos!`)
  .addField('1️⃣ Ultilidades\n2️⃣ Diversão \n3️⃣ Moderação\n4️⃣ Economia \n⬅️ Voltar', '\u200B', false)
  .addField('Chame Na Dm Por ajuda!✰ Star.#9537\nOu\njose_trindade1#4463')
  .setFooter('Criadores: ✰ Star.#9537\n\njose_trindade1#4463')
          
    msg.edit(embed);
  })
})
}
module.exports.help = {
    name: "ajuda",
    aliases: ['help', 'comandos', 'commands']
}