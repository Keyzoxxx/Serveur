const Discord = require("discord.js");
const Command = require("../../Structure/Command")

module.exports = new Command({
  name: "sudo",
  description: "Permet de créer un webhook pour se faire passer pour quelqu'un",
  usage: "[membre] (message)",
  alias: ["sudo"],
  args: true,
  permission: Discord.Permissions.FLAGS.MANAGE_WEBHOOKS,
  category: "Modérateur",

  async run(bot, message, args, db) {
    message.delete();
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let Embed1 = new Discord.MessageEmbed()
    .setColor(bot.color)
    .setDescription(`❌ \*Aucune personne trouvée !\*`)

    if (!user) return message.channel.send({embeds: [Embed1]});
    const webhook = await message.channel.createWebhook(user.displayName, {
      avatar: user.user.displayAvatarURL(),
      channel: message.channel.id
    });
    try {
      await webhook.send(args.slice(1).join(" ")).then(() => {
        webhook.delete();})
    } catch {
      let Embed2 = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setDescription(`❌ \*Veuillez inclure un message !\*`)

      message.channel.send({embeds: [Embed2]});
    }
  }
});