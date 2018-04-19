// Create a Discord client
import { Client } from "discord.js";
const client = new Client();

// Load a local .env file if in development
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

// Setup logger
import { getLogger } from "./conf/logging-config.js";
const log = getLogger();

const BOT_TOKEN = process.env.BOT_TOKEN;

client.login(BOT_TOKEN).catch(error => 
    console.log(error)).then(
        log.info("I'm logged in 2")
    );