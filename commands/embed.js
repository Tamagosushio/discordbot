const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("埋め込みを送信します")
    .addStringOption((option) => 
      option.setName("title")
        .setDescription("タイトル")
        .setRequired(false)
    )
    .addStringOption((option) => 
      option.setName("description")
        .setDescription("説明")
        .setRequired(false)
    )
    .addNumberOption((option) => 
      option.setName("color")
        .setDescription("色のRGBコード(16進数)")
        .setRequired(false)
        .addChoices(
          { name: "red",   value: 0xFF0000 },
          { name: "green", value: 0x00FF00 },
          { name: "blue",  value: 0x0000FF }
        )
    ),
  async execute(interaction){
    const options = interaction.options;
    const replyEmbed = new EmbedBuilder()
      .setTitle(options.getString("title") || "無題")
      .setDescription(options.getString("description") || "\u200b")
      .setAuthor({ name:interaction.user.globalName, iconURL:interaction.user.avatarURL() })
      .setColor(options.getNumber("color") || "Random")
    interaction.reply({
      embeds: [replyEmbed]
    });
  }
}