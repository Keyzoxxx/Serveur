const Discord = require("discord.js");
const simplydjs = require("simply-djs");
const Command = require("../../Structure/Command")

module.exports = new Command({

  name: "calculette",
  description: "Permet de faire des calculs",
  utilisation: "",
  alias: ["calculette", "calcul", "math"],
  permission: "",
  category: "Divers",

  async run(bot, message, args, db) {
        simplydjs.calculator(message, {
          embedColor: '#00feff',
        })
    }
});