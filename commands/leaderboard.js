const db = require('quick.db')
const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
let diffar = [] //aqui onde vai pega todos os users
client.guilds.cache.get(message.guild.id).members.cache.forEach((guild,member)=>{//aqui ele ta pegando todos os users to bot
diffar.push(member) // coloca os users no diffar
})

let peopleshow = 100; // o tando que vai mostra no leaderboard tipo aqui vai mostra so 100 pessoas ps: tem um maximo que eu n sei quando que é ;-;
let people = 0;
let embed = true; //se quiser em embed liga isso não luga deixe "true"
if(embed === true) peopleshow = 20
let membros = diffar.length // aqui é o tamanho dos membros que esta no diffar
let mes = [];//aqui é onde ira salvar os dinheiros

for(let i = 0; i < membros; i++){//fazendo um loop para cada membros que tive e salva no mes
  let amount = db.get(`money_${message.guild.id}_${diffar[i]}`)
  let banco = db.get(`bank_${message.guild.id}_${diffar[i]}`)
  if(!amount)continue;//se não tive dinheiro ira continuar o for
  if(!banco) banco = 0
  if(amount < 1) continue
  if(!message.guild.members.cache.get(diffar[i])) continue
  mes.push({
    name: diffar[i],
    amount:amount,
    banco:banco
  });

} 
let realArr = []//aqui é onde vai salva os dados tipo "#1 @jose_trindade1 - dinheiro 100$"

mes.sort((a,b) => b.amount - a.amount);//isso é para fazer o leaderboard funciona (tipo assim sem isso um com 0 reais ia fica em  1 ou aleatorio)
for(let k = 0; k < mes.length; k++){//outro loop mais agora é so para salva no realArr
  people++
  if(people > peopleshow) continue;//se o people vo maio do que o show vai continua a ação
realArr.push(`#${k + 1} - <@${mes[k].name}> - money $${mes[k].amount} - banco ${mes[k].banco}`);
}

let finalb = realArr.join("\n")
if(embed === false){
message.reply(`leaderboard do server! \n\ ${finalb}`)
}else if (embed === true){
  let embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle('leaderboard do server')
  .setDescription(finalb)
  .setFooter('se alquem não estive aqui é pq ele não tem dinheiro')
  message.channel.send(`${message.author}`,embed)
}else{
  return message.reply('alquem não colocou uma coisa certo no script do bot... porfavor tire print disso e manda para um developer do bot')
}
}