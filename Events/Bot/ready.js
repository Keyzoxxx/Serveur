const Discord = require("discord.js")
const Event = require("../../Structure/Event")
const SlashCommand = require("../../Structure/SlashCommand")

module.exports = new Event("ready", async bot => {

  const db = bot.db;

  await SlashCommand(bot);

  let totalUsers = bot.guilds.cache.reduce((acc, value) => acc + value.memberCount, 0)
  var activities = [ `${bot.guilds.cache.size} serveur`, `${totalUsers} membres` ], i = 0;
  setInterval(() => bot.user.setActivity(`!help | ${activities[i++ % activities.length]}`, { type: "WATCHING" }),5000)

  console.log(`
  ╔═════════════════════════════╗
  ║  Connecté sur ${bot.guilds.cache.size} serveur(s)  ║
  ╚═════════════════════════════╝`)

  
  setInterval(async () => {

    db.query(`SELECT * FROM temp`, async (err, req) => {

      if(req.length < 1) return;

      for(let i = 0; i < req.length; i++) {

        if(Date.now() < parseInt(req[i].time)) return;

        if(req[i].sanctionID.startsWith("BAN")) {

          try {

            bot.guilds.cache.get(req[i].guildID).members.unban(req[i].userID)
            db.query(`DELETE FROM temp WHERE sanctionID = '${req[i].sanctionID}'`)

          } catch (err) {}
        }
      }
  })
  }, 1000)

  let EmbedReglement = new Discord.MessageEmbed()
  .setColor(bot.color)
  .setTitle('Règlement du serveur')
  .setDescription(`*- Le respect des autres, commence par le respect de soi-même, soyez aimables avec tous et toutes.*\n*- La pub est interdite, que se soit par MP ou dans le discord.*\n*- Le SPAM est interdit, du coup sanctionné, pour le bien des membres.*\n*- Les soundboards, modificateurs de voix et spam audio sont interdits.*\n*- Ne pas envoyer des photos à caractères pornographiques ou choquants.*\n*- Ne pas envoyer des fichiers pouvant nuire aux utilisateurs.*\n*- Les salons ont des noms, merci de les utiliser correctement.*\n*- Toutes discriminations, racismes ou antisémitisme sera sanctionné d'un bannissement définitif sans retour.*\n*- Toute autre chose immorale, comme le harcèlement ou pédophilie aura recours à de lourdes sanctions, plus que le BAN DEF.*`)
  .setTimestamp()
  .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL({dynamic: true}))
  
  var ButtonReglement = new Discord.MessageActionRow()
  .addComponents(new Discord.MessageButton()
  .setCustomId('reglement')
  .setStyle('SUCCESS')
  .setLabel('Valider le règlement')
  .setEmoji('✔️')
  );
  
  let ChannelReglement = bot.channels.cache.get("940261181380231168")
  try {
      await ChannelReglement.bulkDelete(100)
  } catch (err) {}

  ChannelReglement.send({embeds: [EmbedReglement], components: [ButtonReglement]})
  
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
  
  let ChannelTicket = bot.channels.cache.get("997305899297292378")
  try {
      await ChannelTicket.bulkDelete(100)
  } catch (err) {}

  ChannelTicket.send({embeds: [EmbedTicket], components: [MenuTicket]})

  let EmbedReseaux = new Discord.MessageEmbed()
  .setColor(bot.color)
  .setTitle("Réseaux")
  .setDescription(`\*Si vous souhaitez me soutenir, voici mes réseaux :\*\n\*[YouTube](https://www.youtube.com/channel/UCbuQd2MPfZYjhdiyki3ujmw)\*\n\*[Twitch](https://www.twitch.tv/bigsunv3)\*\n\*[TikTok](https://www.tiktok.com/@bigsunv3?lang=fr)\*\n\*[PayPal](https://www.paypal.me/bigsunv3?locale.x=fr_FR)\*`)
  .setTimestamp()
  .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL({dynamic: true}))

  let ChannelReseaux = bot.channels.cache.get("997239889538076783")
  try {
    await ChannelReseaux.bulkDelete(100)
  } catch (err) {}

  ChannelReseaux.send({embeds: [EmbedReseaux]})

  
  let EmbedRoleGenre = new Discord.MessageEmbed()
  .setColor(bot.color)
  .setTitle("Rôles Divers")
  .setDescription(`<@&940916229089148958>\n<@&940916393380028446>`)

  var ButtonRoleGenre = new Discord.MessageActionRow()
  .addComponents(new Discord.MessageButton()
  .setCustomId('homme')
  .setLabel("Homme")
  .setStyle('SUCCESS')
  .setEmoji('🧍‍♂️'),
  new Discord.MessageButton()
  .setCustomId('femme')
  .setLabel("Femme")
  .setStyle('SUCCESS')
  .setEmoji('🧍‍♀️')
  );

  let ChannelRoleGenre = bot.channels.cache.get("997186834989850655")
  try {
    await ChannelRoleGenre.bulkDelete(100)
  } catch (err) {}

  ChannelRoleGenre.send({embeds: [EmbedRoleGenre], components: [ButtonRoleGenre]})

  
  let EmbedRoleSituation = new Discord.MessageEmbed()
  .setColor(bot.color)
  .setDescription(`<@&940916842329931786>\n<@&940916706535170058>`)

  var ButtonRoleSituation = new Discord.MessageActionRow()
  .addComponents(new Discord.MessageButton()
  .setCustomId('couple')
  .setLabel("Couple")
  .setStyle('DANGER')
  .setEmoji('❤️'),
  new Discord.MessageButton()
  .setCustomId('celibataire')
  .setLabel("Célibataire")
  .setStyle('DANGER')
  .setEmoji('💔')
  );
  
  let ChannelRoleSituation = bot.channels.cache.get("997186834989850655")
  ChannelRoleSituation.send({embeds: [EmbedRoleSituation], components: [ButtonRoleSituation]})

  
  let EmbedRoleAge = new Discord.MessageEmbed()
  .setColor(bot.color)
  .setDescription(`<@&940917195632963594>\n<@&940917019296038932>`)

  var ButtonRoleAge = new Discord.MessageActionRow()
  .addComponents(new Discord.MessageButton()
  .setCustomId('majeur')
  .setLabel("Majeur")
  .setStyle('PRIMARY')
  .setEmoji('🔞'),
  new Discord.MessageButton()
  .setCustomId('mineur')
  .setLabel("Mineur")
  .setStyle('PRIMARY')
  .setEmoji('🚫')
  );

  let ChannelRoleAge = bot.channels.cache.get("997186834989850655")
  ChannelRoleAge.send({embeds: [EmbedRoleAge], components: [ButtonRoleAge]})


  let EmbedRoleColor = new Discord.MessageEmbed()
  .setColor(bot.color)
  .setTitle('Rôles couleurs')
  .setDescription(`*Choisissez la couleur que vous voulez vous définir !*`)
  .setTimestamp()
  .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL({dynamic: true}))
  
  var MenuRoleColor = new Discord.MessageActionRow()
  .addComponents(new Discord.MessageSelectMenu()
  .setCustomId('menurolecouleur')
  .setMaxValues(1)
  .setMinValues(0)
  .setPlaceholder('Sélectionner la couleur que vous voulez !')
  .addOptions([
    {
      label: "Rouge", 
      description: "Apparaître avec cette couleur",  
      emoji: "🔴", 
      value: "rouge"
    }, 
    {
      label: "Orange", 
      description: "Apparaître avec cette couleur",  
      emoji: "🟠", 
      value: "orange"
    },
    {
      label: "Jaune", 
      description: "Apparaître avec cette couleur",  
      emoji: "🟡", 
      value: "jaune"
    },
    {
      label: "Vert", 
      description: "Apparaître avec cette couleur",  
      emoji: "🟢", 
      value: "vert"
    },
    {
      label: "Bleu", 
      description: "Apparaître avec cette couleur",  
      emoji: "🔵", 
      value: "bleu"
    },
    {
      label: "Violet", 
      description: "Apparaître avec cette couleur",  
      emoji: "🟣", 
      value: "violet"
    },
    {
      label: "Marron", 
      description: "Apparaître avec cette couleur",  
      emoji: "🟤", 
      value: "marron"
    },
    {
      label: "Blanc", 
      description: "Apparaître avec cette couleur",  
      emoji: "⚪", 
      value: "blanc"
    },
    {
      label: "Noir", 
      description: "Apparaître avec cette couleur",  
      emoji: "⚫", 
      value: "noir"
    },
    ])
  );
  
  let ChannelRoleColor = bot.channels.cache.get("997174749509734410")
  try {
      await ChannelRoleColor.bulkDelete(100)
  } catch (err) {}

  ChannelRoleColor.send({embeds: [EmbedRoleColor], components: [MenuRoleColor]})
  
})

