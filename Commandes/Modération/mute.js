const Discord = require("discord.js")
const ms = require("ms")
const Command = require("../../Structure/Command")
const { ChannelLogsMute } = require("../../config");

module.exports = new Command({

    name: "mute",
    description: "Permet de rendre muet un utilisateur",
    utilisation: "[membre]  (raison)",
    alias: ["mute", "tempmute"],
    permission: Discord.Permissions.FLAGS.MODERATE_MEMBERS,
    category: "Modération",

    async run(bot, message, args, db) {

      let Embed1 = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setDescription(`❌ \*Aucune personne trouvée !\*`)

      let Embed2 = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setDescription(`❌ \*Vous ne pouvez pas vous rendre muet vous-même !\*`)

      let Embed3 = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setDescription(`❌ \*Vous ne pouvez pas rendre muet cette personne !\*`)

      let Embed4 = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setDescription(`❌ \*Vous ne pouvez pas rendre muet cette personne !\*`)

      let Embed7 = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setDescription(`❌ \*Cette personne est déjà muette !\*`)

      let Embed9 = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setDescription(`❌ \*Veuillez indiquer une durée !\*`)

      let Embed8 = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setDescription(`❌ \*Le temps indiqué est invalide !\*`)

      let Embed10 = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setDescription(`❌ \*Le temps ne doit pas être supérieur à 28 jours !\*`)
      
      let user = message.user === undefined ? (message.mentions.users.first() || bot.users.cache.get(args[0])) : bot.users.cache.get(args._hoistedOptions[0].value)
      if(!user) return message.reply({embeds: [Embed1]})

      let time = message.user ? args._hoistedOptions[1].value : args[1]
      if(!time) return message.reply({embeds: [Embed9]})
      if(!parseInt(ms(time))) return message.reply({embeds: [Embed8]})
      if(ms(time) > 2419200000) return message.reply({embeds: [Embed10]})

      let reason = message.user ? (args._hoistedOptions.length > 2 ? args._hoistedOptions[2].value : undefined) : args.slice(2).join(" ");
      if(!reason) reason = "Aucune raison donnée";

      if(message.user === undefined ? (user.id === message.author.id) : (user.id === message.user.id)) return message.reply({embeds: [Embed2]})
      if(user.id === message.guild.ownerId) return message.reply({embeds: [Embed3]})
      if(message.member.roles.highest.comparePositionTo(message.guild.members.cache.get(user.id).roles.highest) <= 0) return message.reply({embeds: [Embed4]})
      if(message.guild.members.cache.get(user.id).isCommunicationDisabled()) return message.reply({embeds: [Embed7]})

      try {
        let Embed5 = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setTitle("Muet")
        .setDescription(`\*Vous avez été rendu muet du serveur \_\_${message.guild.name}\_\_ pendant \_\_${time}\_\_ par \_\_${message.user === undefined ? message.author.tag : message.user.tag}\_\_.\*\n\n\*\*Raison :\*\* \*${reason}.\*`)
        .setTimestamp()
        .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL({dynamic: true}))

        
        await user.send({embeds: [Embed5]})
      } catch (err) {}

      const ID = await bot.function.createID("MUTE")

      let sql = `INSERT INTO mutes (userID, authorID, muteID, guildID, reason, date, time) VALUES (${user.id}, '${message.user === undefined ? message.author.id : message.user.id}', '${ID}', '${message.guildId}', '${reason}', '${Date.now()}', '${time}')`
      db.query(sql, function(err) {
        if(err) throw err;
      })

      await message.guild.members.cache.get(user.id).timeout(ms(time), reason)

      let Embed6 = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setTitle("Muet")
      .setDescription(`\*${user.tag} a été rendu muet par ${message.user === undefined ? message.author.tag : message.user.tag} pendant ${time}.\*\n\n\*\*Raison :\*\* \*${reason}.\*`)
      .setTimestamp()
      .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL({dynamic: true}))

      await message.reply({embeds: [Embed6]})

      let ChannelLogsMutes = bot.channels.cache.get(ChannelLogsMute)

      let EmbedMute = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setTitle("Muet")
      .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/21/speaker-with-cancellation-stroke_1f507.png')
      .setDescription(`***Utilisateur :*** *${user}*\n***Modérateur :*** *${message.user ? message.user : message.author}*\n***Date :*** *<t:${Math.floor(message.createdAt / 1000)}:F>*\n***Raison :*** *${reason}.*`)
      .setTimestamp()
      .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL({dynamic: true}))
  
      ChannelLogsMutes.send({embeds: [EmbedMute]})  
  }
})