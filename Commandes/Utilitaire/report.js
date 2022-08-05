const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const { ChannelLogsReport } = require("../../config");

module.exports = new Command({

    name: "report",
    description: "Permet de report un joueur",
    utilisation: "[membre] (raison)",
    alias: ["report"],
    permission: "",
    category: "Utilitaire",

    async run(bot, message, args, db) {
     
      let Embed = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setDescription(`❌ \*Aucune personne trouvée !\*`)
      let user = message.user === undefined ? (message.mentions.users.first() || bot.users.cache.get(args[0])) : bot.users.cache.get(args._hoistedOptions[0].value)
      if(!user) return message.reply({embeds: [Embed]})
       
      if(!args[1]) {
        let Embed1 = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setDescription(`❌ \*Veuillez inclure la raison !\*`)

        return message.reply({embeds: [Embed1]})
      }
      try {
        let Embed2 = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setTitle("Report")
        .setDescription(`*Vous avez report* \_\_${user.tag}\_\_ *avec succès sur le serveur* \_\_${message.guild.name}\_\_`)
        .setTimestamp()
        .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL({dynamic: true}))

        
        await message.author.send({embeds: [Embed2]})
      } catch (err) {}

      let EmbedSondage = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setTitle(`Nouveau report de ${message.author.tag}`)
      .setDescription(`***${message.author.tag} a report ${user.tag}***\n***Raison :*** *` + args.slice(1).join(" ") + `*`)
      .setTimestamp()
      .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL({dynamic: true}))
      
      let ChannelReport = bot.channels.cache.get(ChannelLogsReport)

      ChannelReport.send({embeds: [EmbedSondage]})
      message.delete()
    }
})