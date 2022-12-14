const Event = require("../../Structure/Event");
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const { SlashCommandBuilder } = require("@discordjs/builders")
const { token } = require("../../config")

module.exports = new Event("guildCreate", async (bot, guild) => {

  const commands = [

    new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Permet de connaître la latence du bot"),

    new SlashCommandBuilder()
    .setName("prefix")
    .setDescription("Permet de changer le préfixe du bot")
    .addStringOption(option => option.setName("préfixe").setDescription("Le préfixe que vous voulez").setRequired(true)),

    new SlashCommandBuilder()
    .setName("clear")
    .setDescription("Permet de supprimer un nombre de messages")
    .addStringOption(option => option.setName("nombre").setDescription("Le nombre de messages à effacer").setRequired(true)),

    new SlashCommandBuilder()
    .setName("rank")
    .setDescription("Permet de connaître l'expérience d'un utilisateur")
    .addUserOption(option => option.setName("membre").setDescription("Le membre où vous voulez l'expérience").setRequired(false)),

    new SlashCommandBuilder()
    .setName("leaderboard")
    .setDescription("Permet de connaître les 10 utilisateurs avec le plus d'expérience"),

    new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Permet de bannir définitivement un utilisateur")
    .addUserOption(option => option.setName("membre").setDescription("Le membre à bannir").setRequired(true))
    .addStringOption(option => option.setName("raison").setDescription("La raison du bannissement").setRequired(false)),

    new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Permet d'expulser un utilisateur")
    .addUserOption(option => option.setName("membre").setDescription("Le membre à expulser").setRequired(true))
    .addStringOption(option => option.setName("raison").setDescription("La raison de l'expulsion").setRequired(false)),

    new SlashCommandBuilder()
    .setName("restart")
    .setDescription("Permet de redémarrer le bot"),

    new SlashCommandBuilder()
    .setName("stop")
    .setDescription("Permet de stopper le bot"),

    new SlashCommandBuilder()
    .setName("eval")
    .setDescription("Permet d'évaluer un code")
    .addStringOption(option => option.setName("code").setDescription("Le code à évaluer").setRequired(true)),

    new SlashCommandBuilder()
    .setName("reload")
    .setDescription("Permet de recharger une commande")
    .addStringOption(option => option.setName("commande").setDescription("La commande à recharger").setRequired(true)),
    
    new SlashCommandBuilder()
    .setName("warn")
    .setDescription("Permet d'avertir un utilisateur")
    .addUserOption(option => option.setName("membre").setDescription("Le membre à avertir").setRequired(true))
    .addStringOption(option => option.setName("raison").setDescription("La raison de l'avertissement").setRequired(false)),

    new SlashCommandBuilder()
    .setName("antiraid")
    .setDescription("Permet d'activer ou de désactiver l'anti-raid")
    .addStringOption(option => option.setName("état").setDescription("L'état de l'anti-raid").setRequired(true)),
    
    new SlashCommandBuilder()
    .setName("unwarn")
    .setDescription("Permet de supprimer le dernier avertissement reçu par un utilisateur")
    .addUserOption(option => option.setName("membre").setDescription("Le membre à qui supprimer l'avertissement").setRequired(true))
    .addStringOption(option => option.setName("raison").setDescription("La raison de la suppression").setRequired(false)),

    new SlashCommandBuilder()
    .setName("tempban")
    .setDescription("Permet de bannir temporairement un utilisateur")
    .addUserOption(option => option.setName("membre").setDescription("Le membre à bannir temporairement").setRequired(true))
    .addStringOption(option => option.setName("temps").setDescription("Le temps du bannissement").setRequired(true))
    .addStringOption(option => option.setName("raison").setDescription("La raison du bannissement temporaire").setRequired(false)),

    new SlashCommandBuilder()
    .setName("unban")
    .setDescription("Permet de débannir un utilisateur")
    .addUserOption(option => option.setName("membre").setDescription("Le membre à débannir").setRequired(true))
    .addStringOption(option => option.setName("raison").setDescription("La raison du débannissement").setRequired(false)),

    new SlashCommandBuilder()
    .setName("mute")
    .setDescription("Permet de rendre temporairement muet un utilisateur")
    .addUserOption(option => option.setName("membre").setDescription("Le membre à rendre muet").setRequired(true))
    .addStringOption(option => option.setName("temps").setDescription("Le temps du muet").setRequired(true))
    .addStringOption(option => option.setName("raison").setDescription("La raison du muet").setRequired(false)),

    new SlashCommandBuilder()
    .setName("unmute")
    .setDescription("Permet de rendre la parole d'un utilisateur")
    .addUserOption(option => option.setName("membre").setDescription("Le membre à rendre la parole").setRequired(true))
    .addStringOption(option => option.setName("raison").setDescription("La raison du rendu de parole").setRequired(false)),
    
]

    const rest = new REST({ version: "9" }).setToken(token);

    await rest.put(Routes.applicationGuildCommands(bot.user.id, guild.id), { body: commands });
})