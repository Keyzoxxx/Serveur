const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

  name: "ticket",
  description: "Permet d'envoyer l'embed des tickets",
  utilisation: "",
  alias: ["ticket"],
  permission: Discord.Permissions.FLAGS.MANAGE_CHANNELS,
  category: "Modération",
  
  async run(bot, message, args, db) {

    let EmbedTicket = new Discord.MessageEmbed()
    .setColor(bot.color)
    .setTitle('Création ticket')
    .setDescription(`*Il y a plusieurs conditions à respecter dans le salon où sera créé votre ticket :*\n*- \_\_Pas de mentions\_\_ sauf si vous n'avez \_\_pas reçu de réponse sous 24h\_\_.*\n*- \_\_Pas de spam\_\_.*\n*- Ne pas créer de ticket pour des trucs qui ne servent a rien.*`)
    .setTimestamp()
    .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL({dynamic: true}))

    var MenuTicket = new Discord.MessageActionRow()
    .addComponents(new Discord.MessageSelectMenu()
    .setCustomId('menuticket')
    .setMaxValues(1)
    .setMinValues(0)
    .setPlaceholder('Sélectionner le type de ticket que vous voulez !')
    .addOptions([
      {
        label: "Besoin d'aide", 
        description: "Ouvrir un ticket pour obtenir de l'aide",  
        emoji: "🙋‍♂️", 
        value: "help"
      }, 
      {
        label: "Obtenir le bot", 
        description: "Ouvrir un ticket pour obtenir le bot sur ton serveur",  
        emoji: "🤖", 
        value: "bot"
      }
      ])
    );

    try {
      await message.channel.bulkDelete(100)
  } catch (err) {}

    message.delete()
    message.channel.send({embeds: [EmbedTicket], components: [MenuTicket]})

  }
})