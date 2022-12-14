const Discord = require("discord.js")
const ms = require("ms")
const Command = require("../../Structure/Command")
const { ChannelLogsUnban } = require("../../config");

module.exports = new Command({

  name: "unban",
  description: "Permet de débannir un utilisateur",
  utilisation: "[id du membre] (raison)",
  alias: ["unban", "ub"],
  permission: Discord.Permissions.FLAGS.BAN_MEMBERS,
  category: "Modération",
    async run(bot, message, args, db) {

      let Embed1 = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setDescription(`❌ \*Aucune personne trouvée !\*`)

      let Embed2 = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setDescription(`❌ \*Aucune personne trouvée dans les bannissements !\*`)

      let user = message.user ? args._hoistedOptions[0].value : args[0]
      if(!user) return message.reply({embeds: [Embed1]})

      let reason = message.user ? (args._hoistedOptions.length > 1 ? args._hoistedOptions[1].value : undefined) : args.slice(1).join(" ");
      if(!reason) reason = "Aucune raison donnée";

      if((await message.guild.bans.fetch(message.user ? args._hoistedOptions[0].value : args[0])).size === 0) return message.reply({embeds: [Embed2]})
      
      let Embed3 = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setTitle("Débannissement")
      .setDescription(`\*${(await bot.users.fetch(message.user ? args._hoistedOptions[0].value : args[0])).tag} a été débanni par ${message.user === undefined ? message.author.tag : message.user.tag}.\*\n\n\*\*Raison :\*\* \*${reason}.\*`)
      .setTimestamp()
      .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL({dynamic: true}))

      await message.reply({embeds: [Embed3]})

      try {
        let Embed5 = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setTitle("Débannissement")
        .setDescription(`\*Vous avez été débanni du serveur \_\_${message.guild.name}\_\_ par \_\_${message.user === undefined ? message.author.tag : message.user.tag}\_\_.\*\n\n\*\*Raison :\*\* \*${reason}.\*`)
        .setTimestamp()
        .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL({dynamic: true}))

        
        await user.send({embeds: [Embed5]})
      } catch (err) {}

      message.guild.members.unban(message.user ? args._hoistedOptions[0].value : args[0])

    let ChannelLogsUnbans = bot.channels.cache.get(ChannelLogsUnban)

    let EmbedUnban = new Discord.MessageEmbed()
    .setColor(bot.color)
    .setTitle("Débannissement")
    .setThumbnail('https://discords.com/_next/image?url=https%3A%2F%2Fcdn.discordapp.com%2Femojis%2F720066174075011154.png%3Fv%3D1&w=64&q=75')
    .setDescription(`***Utilisateur :*** *${user}*\n***Modérateur :*** *${message.user ? message.user : message.author}*\n***Date :*** *<t:${Math.floor(message.createdAt / 1000)}:F>*\n***Raison :*** *${reason}.*`)
    .setTimestamp()
    .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL({dynamic: true}))

    ChannelLogsUnbans.send({embeds: [EmbedUnban]})
    }
})