const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {

  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

   const dogembed = new Discord.MessageEmbed()
   .setColor("A020F0")
   .setTitle("<:Cachorro:784037444898914304>Um Cachorrinho   para você:")
   .setImage(body.url);

   message.channel.send(dogembed);

}