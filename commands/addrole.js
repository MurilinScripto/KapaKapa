const discord = require('discord.js');

module.exports = {
	name: 'addrole',
	aliases: ['addRole', 'adicionarcargo', 'adicionarCargo'],
	run: async (client, message, args) => {
		if (!message.member.hasPermission('MANAGE_ROLES'))
			return message.channel.send(
				`
<:error:786589421083689063> Desculpe mais para usar esse comando você precisa ter a permissão \`MANAGE_ROLES\``
			);

		if (!message.guild.me.hasPermission('MANAGE_ROLES'))
			return message.channel.send(
				`<:error:786589421083689063> Infelizmente eu não posso executar esse comando eu preciso da permissão \`MANAGE_ROLES\``
			);

		let member =
			message.mentions.members.first() ||
			message.guild.members.cache.get(args[0]);

		if (!member)
			return message.channel.send(
				`<:Pepe_Think:787706750878744586> Para quem eu devo dar um cargo?`
			);

		let role =
			message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);

		if (!role)
			return message.channel.send(
				`<:Pepe_Think:787706750878744586> Qual cargo eu devo dar para ${member} ?`
			);

		if (!member.manageable)
			return message.channel.send(
				`<:error:786589421083689063> Infelizmente não posso dar esse cargo para ${member} o cargo dele é maior que o meu!`
			);

		if (!message.guild.roles.cache.get(role.id).editable)
			return message.channel.send(
				`<:error:786589421083689063> Infelizmente não posso dar esse cargo ao  usuário porque o cargo mencionado é maior que o meu!`
			);

		if (member.roles.cache.has(role.id))
			return message.channel.send(
				`<:error:786589421083689063> O usuário já tem esse cargo!`
			);

		member.roles.add(role.id);
		message.channel.send(
			`<:correct:786589421213712404> Cargo adicionado com sucesso!`
		);
	}
};