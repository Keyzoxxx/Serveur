const Discord = require("discord.js")
const InviteEvent = require("../../Structure/InviteEvent")

module.exports = new InviteEvent("guildMemberAdd", async (bot, member, type, invite, message) => {

    let channel = bot.channels.cache.get("940248731939393596")

    let totalUsers = bot.guilds.cache.reduce((acc, value) => acc + value.memberCount, 0)

    const Welcome = new Discord.MessageEmbed()
    .setColor(bot.color)
    .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
    .setTitle('OH ! Un nouveau arrivant !')
    .setDescription(`*Bienvenu* ${member.user} *!*\n\n*Tu as été invité par* ${invite.inviter} *!*\n\n*Nous sommes maintenant* ${totalUsers} *sur le serveur !*`)
    .setTimestamp()
    .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL({dynamic: true}))

    await channel.send({embeds: [Welcome]})
})