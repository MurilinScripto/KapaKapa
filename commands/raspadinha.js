const db = require('quick.db')
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
let money2 = db.get(`money_${message.guild.id}_${message.author.id}`)
if(!money2){
  money2 = 0
}

if(money2 < 400){
  return message.reply('você precisa de 400 ou mais de dinheiro para pode compra uma raspadinha!')
}else{
db.subtract(`money_${message.guild.id}_${message.author.id}`, 400)
}

let answers = ["<:Nodejs:786382267701788693>", "<:Users:786382236488171530>","<:Nodejs:786382267701788693>", "<:Users:786382236488171530>","<:Nodejs:786382267701788693>","<:JavaScript:786382251067703317>","<:Nodejs:786382267701788693>", "<:Users:786382236488171530>","<:JavaScript:786382251067703317>",,"<:Nodejs:786382267701788693>", "<:Users:786382236488171530>","<:Nodejs:786382267701788693>","<:JavaScript:786382251067703317>","<:Users:786382236488171530>","<:JavaScript:786382251067703317>", "<:Users:786382236488171530>", "<:Users:786382236488171530>"]

let emoji1 = `${answers[Math.floor(Math.random() * answers.length)]}`;
let emoji2 = `${answers[Math.floor(Math.random() * answers.length)]}`;
let emoji3 = `${answers[Math.floor(Math.random() * answers.length)]}`;
let emoji4 = `${answers[Math.floor(Math.random() * answers.length)]}`;
let emoji5 = `${answers[Math.floor(Math.random() * answers.length)]}`;
let emoji6 = `${answers[Math.floor(Math.random() * answers.length)]}`;
let emoji7 = `${answers[Math.floor(Math.random() * answers.length)]}`;
let emoji8 = `${answers[Math.floor(Math.random() * answers.length)]}`;
let emoji9 = `${answers[Math.floor(Math.random() * answers.length)]}`;
if(emoji9 === "undefined")emoji9 = "<:Nodejs:786382267701788693>"
if(emoji8 === "undefined")emoji8 = "<:Nodejs:786382267701788693>"
if(emoji7 === "undefined")emoji7 = "<:Nodejs:786382267701788693>"
if(emoji6 === "undefined")emoji6 = "<:Nodejs:786382267701788693>"
if(emoji5 === "undefined")emoji5 = "<:Nodejs:786382267701788693>"
if(emoji4 === "undefined")emoji4 = "<:Nodejs:786382267701788693>"
if(emoji3 === "undefined")emoji3 = "<:Nodejs:786382267701788693>"
if(emoji2 === "undefined")emoji2 = "<:Nodejs:786382267701788693>"
if(emoji1 === "undefined")emoji1 = "<:Nodejs:786382267701788693>"

  let raspadinha = await message.channel.send(`**aqui esta a sua raspadinha! ${message.author} Raspe clicando na parte cinza e,
se o seu cartão for premiado com combinações do emoji "<:Nodejs:786382267701788693>"  ou "<:JavaScript:786382251067703317>"(Users não ganha)"<:Users:786382236488171530>" na horizontal/vertical/diagonal, clique no emoji <:Canais:786382224206987295> para receber a sua recompensa! Mas cuidado, não tente resgatar prêmios de uma raspadinha que não tem prêmios!!


||${emoji1}||||${emoji2}||||${emoji3}||
||${emoji4}||||${emoji5}||||${emoji6}||
||${emoji7}||||${emoji8}||||${emoji9}|| 
**`)
  raspadinha.react('786382224206987295')
   

const filter = (reaction, user) => {
	return ['786382224206987295'].includes(reaction.emoji.id) && user.id === message.author.id;
};


raspadinha.awaitReactions(filter, { max: 1, time: 600000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

if(reaction.emoji.id === "786382224206987295"){
  let ganho = 0
  if(emoji3 === "<:Nodejs:786382267701788693>"){
  if(emoji6 === "<:Nodejs:786382267701788693>"){
    if(emoji9 === "<:Nodejs:786382267701788693>"){
      let o = ganho
      ganho = Math.floor(o + 250)
    }
  }
}else if(emoji3 === "<:JavaScript:786382251067703317>"){
  if(emoji6 === "<:JavaScript:786382251067703317>"){
    if(emoji9 === "<:JavaScript:786382251067703317>"){
      let o = ganho
      ganho = Math.floor(o+500)
    }
  }
}
if(emoji1 === "<:Nodejs:786382267701788693>"){
  if(emoji2 === "<:Nodejs:786382267701788693>"){
    if(emoji3 === "<:Nodejs:786382267701788693>"){
      let o = ganho
ganho = Math.floor(o + 250)
    }
  }
}else if(emoji1 === "<:JavaScript:786382251067703317>"){
  if(emoji2 === "<:JavaScript:786382251067703317>"){
    if(emoji3 === "<:JavaScript:786382251067703317>"){
let o = ganho
ganho = Math.floor(o + 500)
    }
  }
}

if(emoji1 === "<:Nodejs:786382267701788693>"){
  if(emoji4 === "<:Nodejs:786382267701788693>"){
    if(emoji7 === "<:Nodejs:786382267701788693>"){
      let o = ganho
      ganho = Math.floor(o + 250)
    }
  }
}else if(emoji1 === "<:JavaScript:786382251067703317>"){
  if(emoji4 === "<:JavaScript:786382251067703317>"){
    if(emoji7 === "<:JavaScript:786382251067703317>"){
      let o = ganho
      ganho = Math.floor(o + 500)
    }
  }
}

if(emoji1 === "<:Nodejs:786382267701788693>"){
  if(emoji5 === "<:Nodejs:786382267701788693>"){
    if(emoji9 === "<:Nodejs:786382267701788693>"){
      let o = ganho
      ganho = Math.floor(o + 250)
    }
  }
}else if(emoji1 === "<:JavaScript:786382251067703317>"){
  if(emoji5 === "<:JavaScript:786382251067703317>"){
    if(emoji9 === "<:JavaScript:786382251067703317>"){
      let o = ganho
      ganho = Math.floor(o + 500)
    }
  }
}

if(emoji2 === "<:Nodejs:786382267701788693>"){
  if(emoji5 === "<:Nodejs:786382267701788693>"){
    if(emoji8 === "<:Nodejs:786382267701788693>"){
      let o = ganho
      ganho = Math.floor(o + 250)
    }
  }
}else if(emoji2 === "<:JavaScript:786382251067703317>"){
  if(emoji5 === "<:JavaScript:786382251067703317>"){
    if(emoji8 === "<:JavaScript:786382251067703317>"){
      let o = ganho
      ganho = Math.floor(o + 500)
    }
  }
}

if(emoji4 === "<:Nodejs:786382267701788693>"){
  if(emoji5 === "<:Nodejs:786382267701788693>"){
    if(emoji6 === "<:Nodejs:786382267701788693>"){
      let o = ganho
      ganho = Math.floor(o + 250)
    }
  }
}else if(emoji4 === "<:JavaScript:786382251067703317>"){
  if(emoji5 === "<:JavaScript:786382251067703317>"){
    if(emoji6 === "<:JavaScript:786382251067703317>"){
      let o = ganho 
      ganho = Math.floor(o+500)
    }
  }
}

if(emoji7 === "<:Nodejs:786382267701788693>"){
  if(emoji8 === "<:Nodejs:786382267701788693>"){
    if(emoji9 === "<:Nodejs:786382267701788693>"){
      let o = ganho
      ganho = Math.floor(o + 250)
    }
  }
}else if(emoji7 === "<:JavaScript:786382251067703317>"){
  if(emoji8 === "<:JavaScript:786382251067703317>"){
    if(emoji9 === "<:JavaScript:786382251067703317>"){
      let o = ganho
      ganho = Math.floor(o + 500)
    }
  }
}

if(emoji7 === "<:Nodejs:786382267701788693>"){
if(emoji5 === "<:Nodejs:786382267701788693>"){
if(emoji3 === "<:Nodejs:786382267701788693>"){
  let o = ganho
  ganho = Math.floor(o + 250)
}
}
}else if(emoji7 === "<:JavaScript:786382251067703317>"){
  if(emoji5 === "<:JavaScript:786382251067703317>"){
    if(emoji3 === "<:JavaScript:786382251067703317>"){
      let o = ganho
      ganho = Math.floor(o + 500)
    }
  }
}
if(ganho === 0){  
  message.reply('você perdeu 1000$! eu falei para você não clica no emoji! so se tiver ganhado!')
  let money = db.get(`money_${message.guild.id}_${message.author.id}`)
  if(money >= 1000){
    db.subtract(`money_${message.guild.id}_${message.author.id}`, 1000)
  }
}else{
  message.reply('parabens! você ganhou ' + ganho + '$!')
  db.add(`money_${message.guild.id}_${message.author.id}`, ganho)
}
	}
  })
}
