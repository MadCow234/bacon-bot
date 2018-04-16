// Create a Discord client
const Discord = require("discord.js");
const Winston = require("winston");

if (process.env.NODE_ENV !== 'production') {
      require('dotenv').load();
}
 
if (process.env.NODE_ENV === 'production') {
    var log = new(Winston.Logger)({
        transports: [
            new Winston.transports.Console()
        ]
    });
} else if (process.env.NODE_ENV === "development") {
    var log = new(Winston.Logger)({
        transports: [
            new Winston.transports.File({ filename: 'bacon-bot.log' })
        ]
    });
}

const client = new Discord.Client();

const BOT_TOKEN = process.env.BOT_TOKEN;
log.info(BOT_TOKEN)

client.login(BOT_TOKEN).catch(error => console.log(error));
// log.info("I'm logged in");
