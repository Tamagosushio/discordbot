const { SlashCommandBuilder } = require("discord.js");
const { ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("hey")
    .setDescription("押すと挨拶するボタンを生成"),
  async execute(interaction){
    await interaction.reply({
      component: [
        new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setCustomId("hey")
            .setLabel("👋")
            .setStyle(ButtonStyle.Success)
        )
      ]
    });
  },
  async clickedButton(interaction){
    await interaction.reply({
      content: "hello",
      ephemeral: true
    });
  }
}