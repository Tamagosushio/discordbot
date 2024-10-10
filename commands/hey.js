const { SlashCommandBuilder } = require("discord.js");
const { ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js');
const id = "hey";
module.exports = {
  data: new SlashCommandBuilder()
    .setName(id)
    .setDescription("押すと挨拶するボタンを生成"),
  async execute(interaction){
    await interaction.reply({
      content: "ボタンを生成",
      components: [
        new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setCustomId(id)
            .setLabel("👋")
            .setStyle(ButtonStyle.Success)
        )
      ]
    });
  },
  async handlerButton(interaction){
    await interaction.reply({
      content: "hello",
      ephemeral: true
    });
  }
}