// Create a Discord client
import { Client } from "discord.js";
const client = new Client();

// Load a local .env file if in development
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

// Setup logging
import { Logger, transports as _transports } from "winston";
if (process.env.NODE_ENV === 'production') {
    // Log to console in production because Heroku will add STDOUT to the log stream
    var log = new(Logger)({
        transports: [
            new _transports.Console()
        ]
    });

    // Configure CLI output
    log.cli();

} else if (process.env.NODE_ENV === "development") {
    // Log to a file in development
    var log = new(Logger)({
        transports: [
            new _transports.File({ filename: 'bacon-bot.log' })
        ]
    });
}

const BOT_TOKEN = process.env.BOT_TOKEN;

client.login(BOT_TOKEN).catch(error => 
    console.log(error)).then(
        log.info("I'm logged in")
    );