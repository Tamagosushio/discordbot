const { SlashCommandBuilder } = require("discord.js");
const { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } = require('discord.js');
const id = "fruits";
const fruitsList = ["apple", "melon", "orange"];
module.exports = {
  data: new SlashCommandBuilder()
    .setName(id)
    .setDescription("フルーツを列挙するセレクトメニューを生成"),
  async execute(interaction){
    const options = fruitsList.map((fruit) => {
      return new StringSelectMenuOptionBuilder()
        .setLabel(fruit)
        .setValue(fruit)
    })
    await interaction.reply({
      content: "セレクトメニューを生成",
      components: [
        new ActionRowBuilder().addComponents(
          new StringSelectMenuBuilder()
            .setCustomId(id)
            .addOptions(options)
        )
      ]
    });
  },
  async handlerComponents(interaction){
    await interaction.reply({
      content: interaction.values.join(""),
      ephemeral: true
    })
  }
}