const Discord = require("discord.js");
const Command = require("../../Structure/Command");
const os = require("os");

module.exports = new Command({

  name: "stats",
  description: "Permet d'afficher les statistiques du bot",
  utilisation: "",
  alias: ["stats", "statistiques"],
  permission: Discord.Permissions.FLAGS.SEND_MESSAGES,
  categorie: "Utilitaire.",

  async run(bot, message, args, db) {

    let servercount = bot.guilds.cache.size;
    let usercount = bot.users.cache.size;
    let channelscount = bot.channels.cache.size;
    let arch = os.arch();
    let platform = os.platform();
    let shard = bot.ws.shards.size;
    let NodeVersion = process.version;
    let cores = os.cpus().length;
    let stats = new Discord.MessageEmbed()
      .setTitle(`Statistique ${bot.user.username}`)
      .setColor(bot.color)
      .addFields(
        { name: 'ð» | Nombre de serveurs', value: `\`${servercount}\``, inline: true },
        { name: 'ð | Nombre de membres', value: `\`${usercount}\``, inline: true },
        { name: 'ð¬ | Nombre de salons', value: `\`${channelscount}\``, inline: true },
        { name: 'ð¨ | Architecture de windows', value: `\`${arch}\``, inline: true },
        { name: 'ð | Plateforme de windows', value: `\`${platform}\``, inline: true },
        { name: 'ð | Nombre de shard', value: `\`${shard}\``, inline: true },
        { name: 'ðº | Version de Node.js', value: `\`${NodeVersion}\``, inline: true },
        { name: 'ð | Nombre de cÅurs', value: `\`${cores}\``, inline: true }
      )
      .setTimestamp()
      .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL({dynamic: true}));
    message.reply({ embeds: [stats] })
  }
})