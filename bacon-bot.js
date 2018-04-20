import * as Discord from "discord.js";
import * as DotEnv from "dotenv";
import * as LoggingConfig from "./src/conf/logging.js";

// Create a Discord client
var client = new Discord.Client();

// Load a local .env file if in development
if (process.env.NODE_ENV !== 'production') {
    DotEnv.load();
}

// Setup logger
const log = LoggingConfig.getLogger();

// Get the bot's access token
const BOT_TOKEN = process.env.BOT_TOKEN;

client.login(BOT_TOKEN).then(token => log.info(`${client.user.username} is logged in.`)).catch(error => console.log(error));