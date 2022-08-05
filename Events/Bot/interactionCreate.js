const Discord = require("discord.js")
const transcript = require("discord-html-transcripts")
const Event = require("../../Structure/Event");

module.exports = new Event("interactionCreate", async (bot, interaction, permission, args) => {

  if(interaction.isCommand()) {

    const command = bot.commands.get(interaction.commandName)

    let Embed1 = new Discord.MessageEmbed()
    .setColor(bot.color)
    .setDescription(`❌ \*Vous n'avez pas la permission requise pour exécuter cette commande !\*`)

    let Embed2 = new Discord.MessageEmbed()
    .setColor(bot.color)
    .setDescription(`❌ \*Vous n'avez pas la permission requise pour exécuter cette commande !\*`)
    
    if(command.permission === "Développeur" && interaction.user.id !== "940232076626640897") return interaction.reply({embeds: [Embed1]})
    if(command.permission !== "Aucune" && command.permission !== "Développeur" && !interaction.member.permissions.has(new Discord.Permissions(command.permission))) return interaction.reply({embeds: [Embed2]})

    command.run(bot, interaction, interaction.options, bot.db)
  }
  
 
  if(interaction.isButton()) {
    if(interaction.customId === "valided") {
      await interaction.member.roles.add('999449823352733706')
    }
    else if(interaction.customId === "accesshelp") {
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

       interaction.message.delete()
       interaction.channel.send({embeds: [EmbedHelp], components: [MenuHelp]})
    }
    else if(interaction.customId === "homme") {
      try { 
        interaction.member.roles.remove('940916393380028446')
       } catch (err) {}
      
       let EmbedRoleHomme = new Discord.MessageEmbed()
       .setColor(bot.color)
       .setDescription(`✅ \*Le rôle\* <@&940916229089148958> \*vous a été ajouté avec succès !\*`)

       await interaction.member.roles.add('940916229089148958')
       await interaction.reply({embeds: [EmbedRoleHomme], ephemeral: true})
    }
    else if(interaction.customId === "femme") {
      let EmbedRoleFemme = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setDescription(`✅ \*Le rôle\* <@&940916393380028446> \*vous a été ajouté avec succès !\*`)
      
      try { 
        interaction.member.roles.remove('940916229089148958')
       } catch (err) {}
      await interaction.member.roles.add('940916393380028446')
      await interaction.reply({embeds: [EmbedRoleFemme], ephemeral: true})
    }
    else if(interaction.customId === "couple") {
      let EmbedRoleCouple = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setDescription(`✅ \*Le rôle\* <@&940916842329931786> \*vous a été ajouté avec succès !\*`)

      try { 
        interaction.member.roles.remove('940916706535170058')
       } catch (err) {}
      await interaction.member.roles.add('940916842329931786')
      await interaction.reply({embeds: [EmbedRoleCouple], ephemeral: true})
    }
    else if(interaction.customId === "celibataire") {
      let EmbedRoleCelibataire = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setDescription(`✅ \*Le rôle\* <@&940916706535170058> \*vous a été ajouté avec succès !\*`)

      try { 
        interaction.member.roles.remove('940916842329931786')
       } catch (err) {}
      await interaction.member.roles.add('940916706535170058')
      await interaction.reply({embeds: [EmbedRoleCelibataire], ephemeral: true})
    }
    else if(interaction.customId === "majeur") {
      let EmbedRoleMajeur = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setDescription(`✅ \*Le rôle\* <@&940917195632963594> \*vous a été ajouté avec succès !\*`)

      try { 
        interaction.member.roles.remove('940917019296038932')
       } catch (err) {}
      await interaction.member.roles.add('940917195632963594')
      await interaction.reply({embeds: [EmbedRoleMajeur], ephemeral: true})
    }
    else if(interaction.customId === "mineur") {
      let EmbedRoleMineur = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setDescription(`✅ \*Le rôle\* <@&940917019296038932> \*vous a été ajouté avec succès !\*`)

      try { 
        interaction.member.roles.remove('940917195632963594')
       } catch (err) {}
      await interaction.member.roles.add('940917019296038932')
      await interaction.reply({embeds: [EmbedRoleMineur], ephemeral: true})
    }
    else if(interaction.customId === "reglement") {
      let EmbedValidationReglement = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setDescription(`✅ \*Vous avez validé le règlement avec succès ! Vous pouvez maintenant accéder au reste du serveur !\*`)

      await interaction.member.roles.add('940255420138803240')
      await interaction.reply({embeds: [EmbedValidationReglement], ephemeral: true})
    }
    else if(interaction.customId === "closeticket1") {
      let EmbedSendCloseTicket = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setDescription(`❌ \*Vous n'avez pas la permission requise pour fermer le ticket !\*`)

      if(!interaction.member.permissions.has(new Discord.Permissions('MANAGE_CHANNELS'))) return interaction.reply({embeds: [EmbedSendCloseTicket], ephemeral: true})

      let EmbedCloseTicket = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setDescription(`\*Êtes-vous sûr de vouloir fermer le ticket ?\*`)

      var Button = new Discord.MessageActionRow()
          .addComponents(new Discord.MessageButton()
          .setCustomId('oui')
          .setLabel("Oui")
          .setStyle('SUCCESS'),
          new Discord.MessageButton()
          .setCustomId('non')
          .setLabel("Non")
          .setStyle('DANGER')
          );
      
      await interaction.reply({embeds: [EmbedCloseTicket], components: [Button], ephemeral: true});
    }
    else if(interaction.customId === "oui") {
      interaction.channel.delete();
    }
    else if(interaction.customId === "non") {
      interaction.message.delete()
    }
    else if(interaction.customId === "transcript") {
      let EmbedSendCloseTicket = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setDescription(`❌ \*Vous n'avez pas la permission requise pour demander le transcript du ticket !\*`)

      if(!interaction.member.permissions.has(new Discord.Permissions('MANAGE_CHANNELS'))) return interaction.reply({embeds: [EmbedSendCloseTicket], ephemeral: true})

      let EmbedSendTranscript = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setDescription(`✅ \*Transcript envoyé avec succès !\*`)
      let EmbedTranscript = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setDescription(`\*Transcript de ${interaction.message.embeds[0].description.split(" ")[0]}\*`)

      await interaction.deferReply()
      await bot.channels.cache.get("999420088421716068").send({embeds: [EmbedTranscript], files: [await transcript.createTranscript(interaction.channel)]})
      await interaction.editReply({embeds: [EmbedSendTranscript], ephemeral: true})
    }
  }


  if(interaction.isSelectMenu()) {
    if(interaction.customId === 'menuticket') {
      if(interaction.values == 'help') {
        let channel = await interaction.guild.channels.create(`Help-${interaction.user.username}`, {type: "GUILD_TEXT"})
            await channel.setParent('999129792903393380')

            await channel.permissionOverwrites.create(interaction.user, {
                SEND_MESSAGES: true,
                EMBED_LINKS: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
            })
            await channel.permissionOverwrites.create(interaction.guild.roles.everyone, {
                SEND_MESSAGES: false,
                EMBED_LINKS: false,
                VIEW_CHANNEL: false,
                READ_MESSAGE_HISTORY: false
            })

          let EmbedOpenTicket = new Discord.MessageEmbed()
          .setColor(bot.color)
          .setDescription(`✅ \*Votre ticket a été créé avec succès ${channel} !\*`)
          
          let EmbedTicketHelp = new Discord.MessageEmbed()
          .setColor(bot.color)
          .setTitle('Ticket ouvert')
          .setDescription("<@" + interaction.user.id + "> *Voici votre ticket.*\n*Expliquez-nous en détail votre problème !*\n*(Si il s'agit d'une erreur, je vous laisse fermer le ticket)*")
          .setTimestamp()
          .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL({dynamic: true}))
  
          var Button = new Discord.MessageActionRow()
          .addComponents(new Discord.MessageButton()
          .setCustomId('closeticket1')
          .setLabel("Fermer le ticket")
          .setStyle('DANGER')
          .setEmoji('🔒'),
          new Discord.MessageButton()
          .setCustomId('transcript')
          .setLabel("Demander le transcript")
          .setStyle('PRIMARY')
          .setEmoji('📑')
          );
          channel.send({embeds: [EmbedTicketHelp], components: [Button]})

        interaction.reply({embeds: [EmbedOpenTicket], ephemeral: true})
      }
      else if(interaction.values == 'bot') {
        let channel = await interaction.guild.channels.create(`Bot-${interaction.user.username}`, {type: "GUILD_TEXT"})
            await channel.setParent('999362644748292117')

            await channel.permissionOverwrites.create(interaction.user, {
                SEND_MESSAGES: true,
                EMBED_LINKS: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
            })
            await channel.permissionOverwrites.create(interaction.guild.roles.everyone, {
                SEND_MESSAGES: false,
                EMBED_LINKS: false,
                VIEW_CHANNEL: false,
                READ_MESSAGE_HISTORY: false
            })

          let EmbedOpenTicket = new Discord.MessageEmbed()
          .setColor(bot.color)
          .setDescription(`✅ \*Votre ticket a été créé avec succès ${channel} !\*`)
          
          let EmbedTicketBot = new Discord.MessageEmbed()
          .setColor(bot.color)
          .setTitle('Ticket ouvert')
          .setDescription("<@" + interaction.user.id + "> *Voici votre ticket.*\n*Un membre du staff va s'occuper de vous le plus rapidement possible !*\n*(Si il s'agit d'une erreur, je vous laisse fermer le ticket)*")
          .setTimestamp()
          .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL({dynamic: true}))
  
          var Button = new Discord.MessageActionRow()
          .addComponents(new Discord.MessageButton()
          .setCustomId('closeticket1')
          .setLabel("Fermer le ticket")
          .setStyle('DANGER')
          .setEmoji('🔒'),
          new Discord.MessageButton()
          .setCustomId('transcript')
          .setLabel("Demander le transcript")
          .setStyle('PRIMARY')
          .setEmoji('📑')
          );
          channel.send({embeds: [EmbedTicketBot], components: [Button]})

        interaction.reply({embeds: [EmbedOpenTicket], ephemeral: true})
      }
    }
    else if(interaction.customId === 'menurolecouleur') {
      if(interaction.values == "rouge") {
        let EmbedRoleFemme = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setDescription(`✅ \*Le rôle\* <@&940777856924008459> \*vous a été ajouté avec succès !\*`)

        try { 
          interaction.member.roles.remove('940777996598542357')
          interaction.member.roles.remove('940778392897347594')
          interaction.member.roles.remove('940778595381559307')
          interaction.member.roles.remove('940778765078908959')
          interaction.member.roles.remove('940778994918367303')
          interaction.member.roles.remove('940779133498183730')
          interaction.member.roles.remove('940779324930392124')
          interaction.member.roles.remove('940779556560834560')
         } catch (err) {}
       
        await interaction.member.roles.add('940777856924008459')
        await interaction.reply({embeds: [EmbedRoleFemme], ephemeral: true})
      }
      if(interaction.values == "orange") {
        let EmbedRoleFemme = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setDescription(`✅ \*Le rôle\* <@&940777996598542357> \*vous a été ajouté avec succès !\*`)

        try { 
          interaction.member.roles.remove('940777856924008459')
          interaction.member.roles.remove('940778392897347594')
          interaction.member.roles.remove('940778595381559307')
          interaction.member.roles.remove('940778765078908959')
          interaction.member.roles.remove('940778994918367303')
          interaction.member.roles.remove('940779133498183730')
          interaction.member.roles.remove('940779324930392124')
          interaction.member.roles.remove('940779556560834560')
         } catch (err) {}
       
        await interaction.member.roles.add('940777996598542357')
        await interaction.reply({embeds: [EmbedRoleFemme], ephemeral: true})
      }
      if(interaction.values == "jaune") {
        let EmbedRoleFemme = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setDescription(`✅ \*Le rôle\* <@&940778392897347594> \*vous a été ajouté avec succès !\*`)

        try { 
          interaction.member.roles.remove('940777856924008459')
          interaction.member.roles.remove('940777996598542357')
          interaction.member.roles.remove('940778595381559307')
          interaction.member.roles.remove('940778765078908959')
          interaction.member.roles.remove('940778994918367303')
          interaction.member.roles.remove('940779133498183730')
          interaction.member.roles.remove('940779324930392124')
          interaction.member.roles.remove('940779556560834560')
         } catch (err) {}
       
        await interaction.member.roles.add('940778392897347594')
        await interaction.reply({embeds: [EmbedRoleFemme], ephemeral: true})
      }
      if(interaction.values == "vert") {
        let EmbedRoleFemme = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setDescription(`✅ \*Le rôle\* <@&940778595381559307> \*vous a été ajouté avec succès !\*`)

        try { 
          interaction.member.roles.remove('940777856924008459')
          interaction.member.roles.remove('940777996598542357')
          interaction.member.roles.remove('940778392897347594')
          interaction.member.roles.remove('940778765078908959')
          interaction.member.roles.remove('940778994918367303')
          interaction.member.roles.remove('940779133498183730')
          interaction.member.roles.remove('940779324930392124')
          interaction.member.roles.remove('940779556560834560')
         } catch (err) {}
       
        await interaction.member.roles.add('940778595381559307')
        await interaction.reply({embeds: [EmbedRoleFemme], ephemeral: true})
      }
      if(interaction.values == "bleu") {
        let EmbedRoleFemme = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setDescription(`✅ \*Le rôle\* <@&940778765078908959> \*vous a été ajouté avec succès !\*`)

        try { 
          interaction.member.roles.remove('940777856924008459')
          interaction.member.roles.remove('940777996598542357')
          interaction.member.roles.remove('940778392897347594')
          interaction.member.roles.remove('940778595381559307')
          interaction.member.roles.remove('940778994918367303')
          interaction.member.roles.remove('940779133498183730')
          interaction.member.roles.remove('940779324930392124')
          interaction.member.roles.remove('940779556560834560')
         } catch (err) {}
       
        await interaction.member.roles.add('940778765078908959')
        await interaction.reply({embeds: [EmbedRoleFemme], ephemeral: true})
      }
      if(interaction.values == "violet") {
        let EmbedRoleFemme = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setDescription(`✅ \*Le rôle\* <@&940778994918367303> \*vous a été ajouté avec succès !\*`)

        try { 
          interaction.member.roles.remove('940777856924008459')
          interaction.member.roles.remove('940777996598542357')
          interaction.member.roles.remove('940778392897347594')
          interaction.member.roles.remove('940778595381559307')
          interaction.member.roles.remove('940778765078908959')
          interaction.member.roles.remove('940779133498183730')
          interaction.member.roles.remove('940779324930392124')
          interaction.member.roles.remove('940779556560834560')
         } catch (err) {}
       
        await interaction.member.roles.add('940778994918367303')
        await interaction.reply({embeds: [EmbedRoleFemme], ephemeral: true})
      }
      if(interaction.values == "marron") {
        let EmbedRoleFemme = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setDescription(`✅ \*Le rôle\* <@&940779556560834560> \*vous a été ajouté avec succès !\*`)

        try { 
          interaction.member.roles.remove('940777856924008459')
          interaction.member.roles.remove('940777996598542357')
          interaction.member.roles.remove('940778392897347594')
          interaction.member.roles.remove('940778595381559307')
          interaction.member.roles.remove('940778765078908959')
          interaction.member.roles.remove('940779133498183730')
          interaction.member.roles.remove('940779324930392124')
          interaction.member.roles.remove('940778994918367303')
         } catch (err) {}
       
        await interaction.member.roles.add('940779556560834560')
        await interaction.reply({embeds: [EmbedRoleFemme], ephemeral: true})
      }
      if(interaction.values == "blanc") {
        let EmbedRoleFemme = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setDescription(`✅ \*Le rôle\* <@&940779324930392124> \*vous a été ajouté avec succès !\*`)

        try { 
          interaction.member.roles.remove('940777856924008459')
          interaction.member.roles.remove('940777996598542357')
          interaction.member.roles.remove('940778392897347594')
          interaction.member.roles.remove('940778595381559307')
          interaction.member.roles.remove('940778765078908959')
          interaction.member.roles.remove('940779133498183730')
          interaction.member.roles.remove('940779556560834560')
          interaction.member.roles.remove('940778994918367303')
         } catch (err) {}
       
        await interaction.member.roles.add('940779324930392124')
        await interaction.reply({embeds: [EmbedRoleFemme], ephemeral: true})
      }
      if(interaction.values == "noir") {
        let EmbedRoleFemme = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setDescription(`✅ \*Le rôle\* <@&940779133498183730> \*vous a été ajouté avec succès !\*`)

        try { 
          interaction.member.roles.remove('940777856924008459')
          interaction.member.roles.remove('940777996598542357')
          interaction.member.roles.remove('940778392897347594')
          interaction.member.roles.remove('940778595381559307')
          interaction.member.roles.remove('940778765078908959')
          interaction.member.roles.remove('940779324930392124')
          interaction.member.roles.remove('940779556560834560')
          interaction.member.roles.remove('940778994918367303')
         } catch (err) {}
       
        await interaction.member.roles.add('940779133498183730')
        await interaction.reply({embeds: [EmbedRoleFemme], ephemeral: true})
      }
    } 
    else if(interaction.customId === 'menuhelp') {
      if(interaction.values == 'acceuil') {

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

       interaction.message.delete()
       interaction.channel.send({embeds: [EmbedHelp], components: [MenuHelp]})
      }
      else if(interaction.values == 'systeme') {

        let EmbedSysteme = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setTitle('Voici la catégorie → Système')
        .setDescription(`> \`!prefix\`→ *Permet de changer le prefix du bot.*\n> \`!restart\`→ *Permet de redémarrer le bot.*\n> \`!reload\`→ *Permet de recharger un commande.*\n> \`!eval\`→ *Permet d'évaluer un code.*\n> \`!stop\`→ *Permet de stopper le bot.*`)
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
 
        interaction.message.delete()
        interaction.channel.send({embeds: [EmbedSysteme], components: [MenuHelp]})
      }
      else if(interaction.values == 'administration') {
        let EmbedAdministration = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setTitle('Voici la catégorie → Administration')
        .setDescription(`> \`!antiraid\`→ *Permet d'activer ou de désactiver le mode anti-raid.*\n> \`!captcha\`→ *Permet d'activer ou de désactiver le captcha.*\n> \`!blacklist\`→ *Permet d'ajouter ou de retirer un utilisateur de la blacklist.*\n> \`!scan\`→ *Permet savoir si un utilisateur est blacklist.*`)
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

       interaction.message.delete()
       interaction.channel.send({embeds: [EmbedAdministration], components: [MenuHelp]})
      }
      else if(interaction.values == 'moderation') {

        let EmbedModeration = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setTitle('Voici la catégorie → Modération')
       .setDescription(`> \`!tempban\`→ *Permet de bannir temporairement un utilisateur.*\n> \`!ban\`→ *Permet de bannir définitivement un utilisateur.*\n> \`!unban\`→ *Permet de débannir un utilisateur.*\n> \`!kick\`→ *Permet d'expulser un utilisateur.*\n> \`!warn\`→ *Permet d'avertir un utilisateur.*\n> \`!unwarn\`→ *Permet de supprimer le dernier avertissement reçu par un utilisateur.*\n> \`!warnlist\`→ *Permet de connaître toutes les infractions d'un utilisateur.*\n> \`!mute\`→ *Permet de rendre muet un utilisateur.*\n> \`!unmute\`→ *Permet de rendre la parole d'un utilisateur.*\n> \`!lock\`→ *Permet de bloquer un salon.*\n> \`!unlock\`→ *Permet de débloquer un salon.*\n> \`!slowmode\`→ *Permet de mettre un mode lent sur un salon.*\n> \`!ticket\`→ *Permet d'envoyer l'embed des tickets.*\n> \`!clearchannel\`→ *Permet de supprimer tous les messages d'un salon.*\n> \`!clear\`→ *Permet de supprimer un nombre de messages.*\n> \`!prune\`→ *Permet de supprimer un nombre de messages d'un utilisateur.*\n> \`!snipe\`→ *Permet de connaître le dernier message supprimé du salon.*\n> \`!sudo\`→ *Permet de créer un webhook pour se faire passer pour quelqu'un.*\n> \`!say\`→ *Permet d'envoyer un message avec l'identité du bot.*`)
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

       interaction.message.delete()
       interaction.channel.send({embeds: [EmbedModeration], components: [MenuHelp]})
      }
      else if(interaction.values == 'information') {

        let EmbedInformation = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setTitle('Voici la catégorie → Information')
       .setDescription(`> \`!help\`→ *Permet de connaître toutes les commandes du bot.*\n> \`!serverinfo\`→ *Permet d'avoir des informations sur le serveur.*\n> \`!userinfo\`→ *Permet d'avoir des informations sur un utilisateur.*\n> \`!stats\`→ *Permet d'afficher les statistiques du bot.*\n> \`!ping\`→ *Permet de connaître la latence du bot.*`)
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

       interaction.message.delete()
       interaction.channel.send({embeds: [EmbedInformation], components: [MenuHelp]})
      }
      else if(interaction.values == 'utilitaire') {

        let EmbedInformation = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setTitle('Voici la catégorie → Utilitaire')
       .setDescription(`> \`!report\`→ *Permet de report un joueur.*\n> \`!suggest\`→ *Permet de créer une suggestion.*\n> \`!survey\`→ *Permet de créer un sondage.*`)
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

       interaction.message.delete()
       interaction.channel.send({embeds: [EmbedInformation], components: [MenuHelp]})
      }
      else if(interaction.values == 'fun') {

        let EmbedFun = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setTitle('Voici la catégorie → Fun')
       .setDescription(`> \`!8ball\`→ *Permet de poser une question au bot.*`)
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

       interaction.message.delete()
       interaction.channel.send({embeds: [EmbedFun], components: [MenuHelp]})
      }
      else if(interaction.values == 'divers') {

        let EmbedDivers = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setTitle('Voici la catégorie → Divers')
       .setDescription(`> \`!howgay\`→ *Permet de savoir votre pourcentage de gaytitude.*\n> \`!world\`→ *Permet d'affichez des fuseaux horraire.*\n> \`!calculette\`→ *Permet de faire des calculs.*`)
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

       interaction.message.delete()
       interaction.channel.send({embeds: [EmbedDivers], components: [MenuHelp]})
      }
      else if(interaction.values == 'niveaux') {

        let EmbedNiveaux = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setTitle('Voici la catégorie → Niveaux')
       .setDescription(`> \`!leaderboard\`→ *Permet de connaître les 10 utilisateurs avec le plus d'expérience.*\n> \`!rank\`→ *Permet de voir l'expérience d'un utilisateur.*`)
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

       interaction.message.delete()
       interaction.channel.send({embeds: [EmbedNiveaux], components: [MenuHelp]})
      }
      else if(interaction.values == 'fermer') {
        interaction.message.delete()
      }
    }
  }
})
