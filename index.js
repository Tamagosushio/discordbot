const { Client, GatewayIntentBits, Collection, ButtonBuilder, IntegrationApplication } = require("discord.js");
const client = new Client({ intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.GuildMessages,
]});
const { token } = require("./config.json");

// ディレクトリ内のファイル名を取得
const fs = require("fs");
const commandFiles = fs.readdirSync("./commands")
                        .filter(file => file.endsWith(".js"))

client.commands = new Collection();
client.buttons = new Collection();

for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
	if("handlerButton" in command){
		client.buttons.set(command.data.name, command);
	}
}

client.on("ready", () => {
  console.log(`${client.user.tag}起動完了`);
});

client.on("messageCreate", (message) => {
  if(message.author.bot) return;
  message.channel.send(message.content);
});

client.on("interactionCreate", async (interaction) => {
  if(interaction.isChatInputCommand()){
		const command = interaction.client.commands.get(interaction.commandName);
		await command.execute(interaction);
	}else if(interaction.isButton()){
		const command = interaction.client.buttons.get(interaction.customId);
		await command.handlerButton(interaction);
	}
});

client.login(token);	