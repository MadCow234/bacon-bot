// Create a Discord client
const Discord = require("discord.js");
const client = new Discord.Client();

const BOT_TOKEN = process.env.BOT_TOKEN;

client.login(BOT_TOKEN);