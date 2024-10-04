const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
]});
const config = require("./config.json");
const TOKEN = config.token;

client.on("ready", () => {
    console.log(`${client.user.tag}起動完了`);
})

client.on("messageCreate", (message) => {
    console.log(message.content);
})

client.login(TOKEN);