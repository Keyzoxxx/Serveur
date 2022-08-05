const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

  name: "help",
  description: "Permet de connaître toutes les commandes du bot",
  utilisation: "",
  alias: ["help", "h", "aide"],
  permission: Discord.Permissions.FLAGS.SEND_MESSAGES,
  category: "Information",

  async run(bot, message, args, db) {
    const command = message.user ? bot.alias.get(args._hoistedOptions.length !== 0 ? args._hoistedOptions[0].value : "") : bot.alias.get(args[0])

    if(!command) {
    
      let EmbedHelp = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setTitle('Comment accéder aux commandes ?')
      .setDescription(`*- Si vous souhaitez avoir des informations sur une commande précise, faites *\`!help\` *+ la commande que vous voulez.*\n*- Si vous cherchez une commande, je vous laisse choisir une des catégories dans le menu déroulant juste en dessous.*`)
      .addField('Liens utiles', `> [Serveur Discord](https://discord.gg/ztD4eRCG25)\n> [Invitation Keyzox Protect](https://discord.com/api/oauth2/authorize?client_id=995016266807005245&permissions=8&scope=bot%20applications.commands)`)
      .setTimestamp()
      .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL({dynamic: true}))
      
      var MenuHelp = new Discord.MessageActionRow()
      .addComponents(new Discord.MessageSelectMenu()
      .setCustomId('menuhelp')
      .setMaxValues(1)
      .setMinValues(0)
      .setPlaceholder('Sélectionner la catégorie que vous voulez !')
      .addOptions([
        {
          label: "Acceuil", 
          description: "Revenir a l'accueil du menu",  
          emoji: "🏠", 
          value: "acceuil"
        }, 
        {
          label: "Système", 
          description: "Obtenir les commandes de cette catégorie",  
          emoji: "⚙️", 
          value: "systeme"
        }, 
        {
          label: "Administration", 
          description: "Obtenir les commandes de cette catégorie",  
          emoji: "🔧", 
          value: "administration"
        }, 
        {
          label: "Modération", 
          description: "Obtenir les commandes de cette catégorie",  
          emoji: "🔨", 
          value: "moderation"
        }, 
        {
          label: "Information", 
          description: "Obtenir les commandes de cette catégorie",  
          emoji: "💠", 
          value: "information"
        }, 
        {
         label: "Utilitaire", 
         description: "Obtenir les commandes de cette catégorie",  
         emoji: "🔰", 
         value: "utilitaire"
        }, 
        {
         label: "Divers", 
         description: "Obtenir les commandes de cette catégorie",  
         emoji: "🧩", 
         value: "divers"
        }, 
        {
          label: "Fun", 
          description: "Obtenir les commandes de cette catégorie",  
          emoji: "🎉", 
          value: "fun"
        }, 
        {
          label: "Niveaux", 
          description: "Obtenir les commandes de cette catégorie",  
          emoji: "🏅", 
          value: "niveaux"
        }, 
        {
          label: "Fermer", 
          description: "Fermer le menu d'aide",  
          emoji: "❌", 
          value: "fermer"
        }, 
        ])
      );
      
      message.delete()
      message.channel.send({embeds: [EmbedHelp], components: [MenuHelp]})
    }
        
    db.query(`SELECT * FROM serveur WHERE guildID = ${message.guildId}`, async (err, req) => {
      if(command) {

        let Embed = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setTitle(`Voici les informations sur la commande → ${command.name}`)
        .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
        .setDescription(`> *Nom de la commande :* \`${message.user ? args._hoistedOptions[0].value : args[0]}\`\n> *Description de la commande :* \`${command.description}\`\n> *Utilisation de la commande :* \`${message.user ? args._hoistedOptions[0].value : args[0]} ${command.utilisation}\`\n> *Alias de la commande :* ${command.alias.filter(a => a !== (message.user ? args._hoistedOptions[0].value : args[0])).map(a => `\`${a}\``).join(" ")}\n> *Catégorie de la commande :* \`${command.category}\`\n> *Permission de la commande :* \`${new Discord.Permissions(command.permission).toArray(false)}\``)
        .setTimestamp()
        .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL({dynamic: true}))
        var ButtonHelp = new Discord.MessageActionRow()
        .addComponents(new Discord.MessageButton()
        .setCustomId('accesshelp')
        .setLabel("Accéder au menu d'aide")
        .setStyle('SUCCESS')
        .setEmoji('✔️'));


        message.delete()
        message.channel.send({embeds: [Embed], components: [ButtonHelp]})
      }
    })
  }
})