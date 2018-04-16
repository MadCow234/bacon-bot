// Create a Discord client
const Discord = require("discord.js");
const client = new Discord.Client();

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

const Winston = require("winston");
if (process.env.NODE_ENV === 'production') {
    // Log to console in production because Heroku will add STDOUT to the log stream
    var log = new(Winston.Logger)({
        transports: [
            new Winston.transports.Console()
        ]
    });

    // Configure CLI output
    log.cli();

} else if (process.env.NODE_ENV === "development") {
    // Log to a file in development
    var log = new(Winston.Logger)({
        transports: [
            new Winston.transports.File({ filename: 'bacon-bot.log' })
        ]
    });
}

const BOT_TOKEN = process.env.BOT_TOKEN;

client.login(BOT_TOKEN).catch(error => 
    console.log(error)).then(
        log.info("I'm logged in")
    );