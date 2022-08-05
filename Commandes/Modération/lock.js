const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const { ChannelLogsLock } = require("../../config");

module.exports = new Command({

    name: "lock",
    description: "Permet de bloquer un salon",
    utilisation: "[channel] (reason)",
    alias: ["lock"],
    permission: Discord.Permissions.FLAGS.MANAGE_CHANNELS,
    category: "Modération",

    async run(bot, message, args, db) {

        let Embed1 = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setDescription(`❌ \*Aucun salon trouvé !\*`)

        let Embed2 = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setDescription(`❌ \*Ce salon est déjà bloqué !\*`)
        
        let channel = message.user ? message.guild.channels.cache.get(args._hoistedOptions[0].value) : (message.mentions.channels.first() || message.guild.channels.cache.get(args[0]))
        if(!channel) return message.reply({embeds: [Embed1]})

        let reason = message.user ? args._hoistedOptions.length > 1 ? args._hoistedOptions[1].value : undefined : args.slice(1).join(" ");
        if(!reason) reason = "Aucune raison donnée";

        if(channel.permissionOverwrites.cache.get(message.guild.roles.everyone.id)?.deny.toArray(false).includes("SEND_MESSAGES")) return message.reply({embeds: [Embed2]})

        await channel.permissionOverwrites.edit(message.guild.roles.everyone.id, {
            SEND_MESSAGES: false
        })

        let Embed3 = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setDescription(`✅ \*Le salon a été bloqué avec succès !\*`)
        
        let Embed4 = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setTitle('Lock')
        .setDescription(`\*Ce salon a été bloqué par ${message.user ? message.user : message.author}.\*\n\*\*Raison :\*\* \*${reason}.\*`)
        .setTimestamp()
        .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL({dynamic: true}))
        
        await message.reply({embeds: [Embed3]})
        await channel.send({embeds: [Embed4]})

        let ChannelLogsLocks = bot.channels.cache.get(ChannelLogsLock)

        let EmbedLock = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setTitle("Bloquement")
        .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/locked_1f512.png')
        .setDescription(`***Salon :*** *${channel}*\n***Modérateur :*** *${message.user ? message.user : message.author}*\n***Date :*** *<t:${Math.floor(message.createdAt / 1000)}:F>*\n***Raison :*** *${reason}.*`)
        .setTimestamp()
        .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL({dynamic: true}))
    
        ChannelLogsLocks.send({embeds: [EmbedLock]})  
    }
})